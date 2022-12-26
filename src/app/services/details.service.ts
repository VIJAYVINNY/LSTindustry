import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  // url = 'http://localhost:7890/details';        //// List Of Employees URL

  url="http://localhost:3000/trainees";        //// List Of trainees URL

  

  constructor(public http: HttpClient) { }

  getDetails(){
    return this.http.get(this.url)
  }
}
