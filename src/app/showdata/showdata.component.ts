import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  constructor(public detailsService:DetailsService){}
 
  ngOnInit(): void {
   
  }

}
