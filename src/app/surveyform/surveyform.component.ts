import { Component, OnInit } from '@angular/core';
import { Survey } from '../shared/survey';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css'],
  providers: [DataService]
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

  survey = new Survey(
    'Name',
    'exmail@example.com',
    'How did you get to know us..',
    'Where did you purchase Simba Governor',
    'What made you purchase the Simba Speed Governor',
    'Any issues?',
    'Your occupation',
    'Any benefits..',
    'Age group',
    'Address or Estate',
    'Rate us',
    'Suggestions'
  );

  surveys = [];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.surveys = this.dataService.getSurveys();
    console.log(this.surveys);
  }

  onSubmit(): void {
    let data = Object.assign({}, this.survey);
    this.dataService.addSurvey(data);
    this.router.navigate(["/success"]);
  }

}
