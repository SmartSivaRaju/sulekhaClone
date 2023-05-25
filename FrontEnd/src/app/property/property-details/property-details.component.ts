import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  propertyId! : number;
  params : any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params => {
        this.params = params;
        this.propertyId = +params['id']
      })
    )
  }

  onSelectNextPage(){
    this.propertyId +=1;
    this.router.navigate(['property-details', this.propertyId])
  }

}
