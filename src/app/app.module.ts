import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes} from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { SerachCitynameComponent } from './serach-cityname/serach-cityname.component';
import {SearchLocation} from './service/searchlocation.service'
@NgModule({
  declarations: [
    AppComponent,
    SerachCitynameComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ReactiveFormsModule,
  ],
  providers: [SearchLocation],
  bootstrap: [AppComponent]
})
export class AppModule { }
  