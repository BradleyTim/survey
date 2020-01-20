import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getSurveys(): any[] {
    if (localStorage.getItem("surveys") == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("surveys"));
    }
  }

  addSurvey(survey: any): void {
    localStorage.setItem(
      "surveys",
      JSON.stringify([survey, ...JSON.parse(localStorage.getItem("surveys"))])
    );
  }
}
