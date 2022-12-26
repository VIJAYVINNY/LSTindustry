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

  getPostData(data:any){
    this.detailsService.postDetails(data).subscribe(result=>{
console.log(result);
    }) 
  }

//   updateContact(detailsid:any){
// this.detailsService.putDetails(detailsid).subscribe(data=>{
//   console.log(detailsid);
  
// })
//   }
  

}
