import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  constructor(public detailsService:DetailsService,private formBuilder:FormBuilder){}

  detailList:any;

formValue!:FormGroup

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:[''],
      gender:[''],
      email:[''],
      phone:[''],
      DOB:[''],
      position:[''],
      package:[''],
    })

    // Get calling
    this.detailsService.getDetails().subscribe(data =>{
      this.detailList=data;
    })
  }

// Post calling
  getPostData(data:any){
    this.detailsService.postDetails(data).subscribe(adding=>{
console.log(adding);
    })
  }

//  PUT Method caling

editDetails(id:any){

  // this.detailsService.updateDetails().subscribe(data=>{
  // })
}

delDetails(){

}


}
