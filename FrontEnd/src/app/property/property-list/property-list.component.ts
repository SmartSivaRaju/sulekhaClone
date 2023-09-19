import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/shared/shared-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  sellProperty: boolean = true;
  Properties: Array<any> = [];

  constructor(
    private sharedService: SharedServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellProperty = false;
    }
    this.sharedService.getAllProperties(this.sellProperty).subscribe(
      (respone: any) => {
        this.Properties = respone;
        const newProp = JSON.parse(localStorage.getItem('newProp')!);
        this.Properties = [newProp, ...this.Properties];
      },
      (error) => {
        console.warn('httpError:', error);
      }
    );
  }
}
