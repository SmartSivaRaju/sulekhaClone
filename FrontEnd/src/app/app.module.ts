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
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AlertifyService } from 'src/shared/alertify.service';
import { UserService } from './user/user.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: 'user/user-registration', component: UserRegisterComponent },
  { path: 'user/user-login', component: UserLoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    PageNotFoundComponent,
    UserRegisterComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ButtonsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [FormsModule],
  providers: [SharedServiceService, AlertifyService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
