import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {SearchLocation} from '../service/searchlocation.service';
import {Location} from '../model/location.model';

@Component({
  selector: 'app-serach-cityname',
  templateUrl: './serach-cityname.component.html',
  styleUrls: ['./serach-cityname.component.css']
})
export class SerachCitynameComponent implements OnInit {
searchForm:FormGroup;
weather:Location;


location={
  city:"London",
  code:"uk"
}
  constructor(private searchlocation:SearchLocation) { 
  this.searchForm=new FormGroup({
  name:new FormControl("",[Validators.required])
});
}

get name(){
  return this.searchForm.get('name') 
}

searchLocation(searchForm:FormGroup){
  console.log("Entering");
  this.searchlocation.getlocation(searchForm.value.name,this.location.city,this.location.code)
  .subscribe(result=>{this.weather=result}); 
}

  ngOnInit() { 
  }
}