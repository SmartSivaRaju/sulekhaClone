import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/model/property';
import { AlertifyService } from 'src/shared/alertify.service';
import { SharedServiceService } from 'src/shared/shared-service.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  addNewPropertyForm: FormGroup | any;
  PropertyDetails = {
    Name: '',
    PType: null,
    Price: null,
    Area: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null,
  };

  property = new Property();

  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sharedService: SharedServiceService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.addNewPropertyForm = this.createNewPropertyForm();
  }

  createNewPropertyForm() {
    return this.formBuilder.group({
      basicInfo: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        city: ['', Validators.required],
        radio: [],
        bhk: [],
        pType: [],
        fType: [],
      }),
      priceInfo: this.formBuilder.group({
        price: ['', Validators.required],
        builtArea: [],
      }),
      readyToMove: [],
      community: [],
      gateEntrance: [],
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  saveForm() {
    this.mapProperty();
    if (
      this.addNewPropertyForm.controls.basicInfo.valid &&
      this.addNewPropertyForm.controls.priceInfo.valid
    ) {
      this.sharedService.saveProperty(this.property);
      this.alertify.success(
        'Congrats, you have successfully saved your property!'
      );
      if (this.property.SellRent === 2) {
        this.router.navigate(['/rent-property']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  mapProperty() {
    this.property.Name =
      this.addNewPropertyForm.controls.basicInfo.get('name').value;
    this.property.SellRent =
      +this.addNewPropertyForm.controls.basicInfo.get('radio').value;
    this.property.BHK =
      this.addNewPropertyForm.controls.basicInfo.get('bhk').value;
    this.property.City =
      this.addNewPropertyForm.controls.basicInfo.get('city').value;
    this.property.PType =
      this.addNewPropertyForm.controls.basicInfo.get('pType').value;
    this.property.FType =
      this.addNewPropertyForm.controls.basicInfo.get('fType').value;
    this.property.Price =
      +this.addNewPropertyForm.controls.priceInfo.get('price').value;
    this.property.BuiltArea =
      +this.addNewPropertyForm.controls.priceInfo.get('builtArea').value;
  }

  cancelForm() {
    this.addNewPropertyForm.reset();
  }
}
