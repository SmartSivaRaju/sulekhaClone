import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  addNewPropertyForm: FormGroup | any;

  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addNewPropertyForm = this.createNewPropertyForm();
  }

  createNewPropertyForm() {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      type: ['', Validators.required],
      price: ['', Validators.required],
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
    console.warn(this.addNewPropertyForm);
  }

  cancelForm() {
    this.addNewPropertyForm.reset();
  }
}
