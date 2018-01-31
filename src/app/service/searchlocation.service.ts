import {Location} from '../model/location.model';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {environment} from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class SearchLocation {
    myUrl='http://api.openweathermap.org/data/2.5/forecast?q=';
constructor(private http:Http){
}
getlocation(city,code,name){
    return this.http.get(this.myUrl+city+code+name+'&APPID=422b144c833783411a5153ab03ebe9c7').map((res)=>{
return res.json()}).catch(this.handleError)
}
private handleError(error:Response){
    return Observable.throw(error.statusText);
}
}