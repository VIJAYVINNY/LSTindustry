import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{

constructor(private contactService:ContactService){}

listOfdetails:any;

 ngOnInit(): void {
  this.listOfdetails=this.contactService.empDetails();
  }
}
