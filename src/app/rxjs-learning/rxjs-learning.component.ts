import { Component, OnInit } from '@angular/core';
import { Observable, of, from, } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {

  constructor() { }

  Observable: any;

  coders!: Observable<string>;

//// of Operator Coding

// detailObj = {
  //   id: 1234,
  //   name: "Phalgua Kumar",
  //   gender: "Male",
  //   contactPreference: "Email",
  //   email: "phalgunakumar@softpath.net",
  //   phoneNumber: 9652733447,
  //   DOB: "10/25/1985",
  //   position: "Director",
  //   package: "33LPA"
  // }
  // details: Observable<any> = of(this.detailObj)

  studentData = ['Viajy', 'Ajay', 'Sanjay', 'Pranay'];
  teamMates$: Observable<string[]> = of(this.studentData);


    studentList = ['Viajy', 'Ajay', 'Sanjay', 'Pranay'];
  students: Observable<string> = from(this.studentList);

  ngOnInit(): void {

    ////  of and from work done with example

    // of(4,5,6,7).subscribe(data=>console.log("The list of values of:"+data));

    // from([22,33,66]).subscribe({
    //   next:item=>console.log(`firsrt item Of from is: ${item}`),
    //   error:err=>console.log(`firsrt item is ${err}`),
    //   complete:()=>console.log(`Successfully conpleted without any errors`),
    // })

    // of("Apple","mango","Banana").subscribe({
    //   next:items=>console.log(`firsrt item Of is: ${items}`),
    //   error:errr=>console.log(`firsrt item is ${errr}`),
    //   complete:()=>console.log(`complete shows entire data without any errors`),
    // })

    // this.details.subscribe(data => {
    //   console.log(data);
    // })

    this.students.subscribe(data => {
      console.log(`The of operator values are:${data}`);
    })

    this.teamMates$.subscribe(data => {
      console.log(`The form opetator values are:${data}`);
    })



    // this.coders = new Observable(
    //   function(observer) {
    //     try {
    //       observer.next("Vijay");
    //        observer.next("Ajay");
    //       observer.next("Sanjay");
    //     }
    //     catch (e) {
    //       observer.error(e);
    //     }
    // }
    // )
    //  this.coders.subscribe(data => {
    //    console.log(data);
    //  })

  }

}
