import { Component, OnInit } from '@angular/core';
import { Observable ,of,from,} from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {
  Observable: any;

  constructor() { }

   coders!:Observable<string>;


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


    this.coders = new Observable(
      function(observer) {
        try {
          observer.next("Vijay");
          observer.next("Ajay");
          observer.next("Sanjay");
        }
        catch (e) {
          observer.error(e);
        }
      }
    )
     this.coders.subscribe(data => {
       console.log(data);
     })
  }

}
