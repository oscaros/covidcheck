import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 constructor() {}

 counterHeadArea = 0;
 counterUpper = 0;
 counterLower = 0;
 array1 = [];
 arrayHead =['', '', '', '', '']


 yourFunction(x){
  switch (x) {
    case "Head area":
        this.counterHeadArea = this.counterHeadArea + 1        
          if (this.counterHeadArea % 2 == 0) {
            console.log('Even Number');
            this.array1.pop();  //remove head area to array 1
          }else{
            console.log('Odd Number');
            this.array1.push(x);  //add head area to array 1
          }
      break;
    case "Upper abdomen":
        this.counterUpper = this.counterUpper + 1
        if (this.counterUpper % 2 == 0) {
          console.log('Even Number');
          this.array1.pop();  //remove upper abdomen area to array 1
        }else{
          console.log('Odd Number');
          this.array1.push(x);  //add upper abdomen to array 1
        }
      break;
    case "Lower abdomen":
        this.counterLower = this.counterLower + 1
        if (this.counterLower % 2 == 0) {
          console.log('Even Number');
          this.array1.pop();  //remove lower abdomen area to array 1
        }else{
          console.log('Odd Number');
          this.array1.push(x);  //add lower abdomen to array 1
        };
      break;   
  }
 }

 functionProceed(y){
    // go to next page with some data from the first
    if (this.array1.length === 0){
      console.log("array is empty");
    }else{
      console.log("array is not empty");
    }
    //console.log(y);
}

}
