import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { Observable, of, from, map, tap, take, takeLast } from 'rxjs';
import { ShowdataModel } from './rxjs-learning.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {
  searchForm!: FormGroup;

  name: FormControl | undefined;
  readValue(): void {
  }
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

  // studentData = ['Viajy', 'Ajay', 'Sanjay', 'Pranay'];
  // teamMates$: Observable<string[]> = of(this.studentData);


  //   studentList = ['Viajy', 'Ajay', 'Sanjay', 'Pranay'];
  // students: Observable<string> = from(this.studentList);

  // //take last operator

  categories = ["mobiles", "telephones", "Vehivles", "sports"];
  category$: Observable<string[]> = of(this.categories);

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

    // this.students.subscribe(data => {
    //   console.log(`The of operator values are:${data}`);
    // })

    this.category$.subscribe(data => {
      this.category$.pipe(
        takeLast(2)
      )
        .subscribe(data2 => {
          console.log(data2);
        })

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

    ////map,tap take Operator

    //  from([22,33,66,11]).pipe(
    //   tap(item=>console.log(`given  Value is ${item}`)),
    //   map(item=>item*2),
    //   map(item=>item-11),
    //   map(item=>{
    //     if(item==0){
    //       throw new Error('Zero is detected');
    //     }
    // return item;
    //   }),
    //  ).subscribe({
    //       next:item=>console.log(` Modified valieis: ${item}`),
    //       error:err=>console.log(`firsrt item is ${err}`),
    //       complete:()=>console.log(`Successfully conpleted without any errors`),
    //     })

  }

}
