import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { DetailsService } from '../services/details.service';
import { ShowdataModel } from '../rxjs-learning/rxjs-learning.model';


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
      this.detailList=data
    console.log(adding);
    })
  }

//  PUT Method caling

editDetails(id:any,data:any){
this.detailsService.updateDetails(id,data).subscribe(result=>{
  this.detailList=result
})
}

delDetails(){

}


}
