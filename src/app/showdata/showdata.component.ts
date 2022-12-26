import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  constructor(public detailsService:DetailsService){}
 
  detailList:any;

  ngOnInit(): void {
    this.detailsService.getDetails().subscribe(data =>{
      this.detailList=data;
    })
   
  }

}
