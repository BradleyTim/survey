import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: "app-surveys",
  templateUrl: "./surveys.component.html",
  styleUrls: ["./surveys.component.css"],
  providers: [DataService]
})
export class SurveysComponent implements OnInit {

  surveys: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.surveys = this.dataService.getSurveys();
    console.log(this.surveys);
  }
}
