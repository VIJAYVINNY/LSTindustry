import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url = 'http://localhost:3000/details';        //// List Of Employees URL

  // url='http://localhost:3000/trainees';        //// List Of trainees URL

  // url='http://localhost:3000/credentials'       ////credentilas URL's

  

  constructor(public http: HttpClient) { }

  getDetails(){
  
    const httpHeaders=new HttpHeaders();
    httpHeaders.append('contentType','application/json');

    return this.http.get(this.url)
  }
postDetails(adding:any){
  return this.http.post(this.url, adding)
}
putDetails(detailsid:any,update:any){
  const endurl=this.url+detailsid;
  return this.http.put(endurl,update)
}
 
}
