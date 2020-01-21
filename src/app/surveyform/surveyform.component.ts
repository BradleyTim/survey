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

  survey: Survey = new Survey(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let data = Object.assign({}, this.survey);
    delete data.id;
    this.dataService.addSurvey(data);
  }

  // onSubmit(): void {
  //   this.dataService.addSurvey(this.survey);
  //   this.router.navigate(["/success"]);
  // }

}
