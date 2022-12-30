import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders,} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  url = 'http://localhost:3000/details';        //// List Of Employees URL

  // url = 'http://localhost:5670/trainees'; //// List Of trainees URL

  // url='http://localhost:3000/credentials'       ////credentilas URL's

  constructor(public http: HttpClient) {}

  getDetails():Observable<any> {

    // const httpHeaders = new HttpHeaders();
    // httpHeaders.append('contentType', 'application/json');

    return this.http.get(this.url);
  }

  postDetails(adding: any):Observable<any> {
    return this.http.post(this.url, adding);
  }

  updateDetails( id:any,updateData:any):Observable<any> {
    // const endurl = this.url+"/"+id;
    const endurl='http://localhost:3000/details/'+id;
    return this.http.put(endurl, updateData);
  }
}
