import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedServiceService } from 'src/shared/shared-service.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

const appRoutes : Routes = [
  { path: '', component: PropertyListComponent},
  { path: 'rent-property', component: PropertyListComponent},
  { path: 'add-property', component: AddPropertyComponent},
  { path: 'property-details/:id', component: PropertyDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SharedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
