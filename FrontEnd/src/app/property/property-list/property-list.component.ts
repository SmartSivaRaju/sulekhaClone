import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/shared/shared-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  sellProperty : boolean = true;
  Properties: Array<any> = [];

  constructor (private sharedService: SharedServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellProperty = false;
    }
    this.sharedService.getAllProperties(this.sellProperty).subscribe((respone: any )=>{
      console.warn(this.route.snapshot.url.toString());
      this.Properties = respone;
    }, error => {
      console.warn("httpError:",error);
    })
  }
}
