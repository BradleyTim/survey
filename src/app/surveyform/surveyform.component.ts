import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {

  ageGroups: string[] = [
    '18 - 24',
    '25 - 35',
    '36 - 45',
    '46 - 65',
    'Over 65'
  ];

  rates: string[] = [
    'Worse',
    'Bad',
    'Average',
    'Good',
    'Excellent'
  ];

  constructor() { }

  ngOnInit() {
  }

}
