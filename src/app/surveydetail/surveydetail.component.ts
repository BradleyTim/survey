import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-surveydetail",
  templateUrl: "./surveydetail.component.html",
  styleUrls: ["./surveydetail.component.css"],
  providers: [DataService]
})
export class SurveydetailComponent implements OnInit {
  survey: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get("name");
    this.dataService.getSurveys().filter(survey => {
      return survey.name == name ? (this.survey = survey) : "";
    });
    console.log(name);
  }

  onBack(): void {
    this.router.navigate(["/results"]);
  }
}
