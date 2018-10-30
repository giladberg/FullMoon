import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import 'rxjs/Rx';

const URL = '../assets/images.json';
@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) {
 }

 getData() {
   return this.http.get(URL);
 }

}
