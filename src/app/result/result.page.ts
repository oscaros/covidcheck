import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrayResultsDisp: Array<any> =  [
    {
      "line": "The results from the assessment are not conclusive therfore you should consider calling a doctor for further laboratory investigations and diagnosis",
      "totalweight": 3
    },
    {
      "line": "Well, from the assesment, all should be fine. continue to stay healthy by eating right, wash hands with soap and carry out social distancing",
      "totalweight": 4
    }
 ]

 

}
