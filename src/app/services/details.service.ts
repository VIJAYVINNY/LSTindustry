import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url = "http://localhost:3000/Details";
  detail:any;
  constructor(public http: HttpClient) { }

  getDetails(){
    return this.http.get(this.url)
  }
}
