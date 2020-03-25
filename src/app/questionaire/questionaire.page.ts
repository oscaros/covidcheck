import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.page.html',
  styleUrls: ['./questionaire.page.scss'],
})
export class QuestionairePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // arrayQuestionsMajor = [ 
  // ['Did you travel to or from any COVID 19 infected country in the last 14 days?', 1],
  // ['Have you come into contact with any COVID 19 infected person in the last 14 days?', 1],
  // ['Have you used any public means of transport in the last 14 days?', 1]
    
  // ]

 

  arrayQuestionsMajor: Array<any> =  [
    {
      "qtn": "Did you travel to or from any COVID 19 infected country in the last 14 days?",
      "weight": 3
    },
    {
      "qtn": "Have you come into contact with any COVID 19 infected person in the last 14 days?",
      "weight": 4
    },
    {
      "qtn": "Have you used any public means of transport in the last 14 days?",
      "weight": 2
    }
 ]

  


  fnDetermine(){
    
  }

}
