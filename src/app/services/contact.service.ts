import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  empDetails(){
   const listOfdetails=[
    {id:1,name:"Vijay"},
    {id:2,name:"Sanjay"},
    {id:3,name:"Ajay"},
    {id:4,name:"Bharath"},
    {id:5,name:"Karunya"},
    {id:6,name:"Sharath"},
  ];
  return listOfdetails;
  }
}
