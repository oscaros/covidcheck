import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionaire2',
  templateUrl: './questionaire2.page.html',
  styleUrls: ['./questionaire2.page.scss'],
})
export class Questionaire2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  arrayQuestionsMinor: Array<any> =  [
    {
      "qtn": "Are you experiencing a dry cough?",
      "weight": 4
    },
    {
      "qtn": "Are you feeling some fever?",
      "weight": 2
    },
    {
      "qtn": "Are you feeling fatigue?",
      "weight": 1
    },

    {
      "qtn": "Are you having a sore throat?",
      "weight": 5
    },
    {
      "qtn": "Are you experiencing some body chills or rigours?",
      "weight": 2
    },
    {
      "qtn": "Are you experincing headache?",
      "weight": 2
    },
    {
      "qtn": "Do you feel like vomiting?",
      "weight": 1
    }
 ]

 fnDetermine(){
    
}

}
