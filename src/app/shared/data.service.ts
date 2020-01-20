import { Injectable } from '@angular/core';
// var firebase: any;

// import { AngularFirestore } from '@angular/fire/firestore';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  url = "https://survey-app-19358.firebaseio.com/.json";

  // constructor(private firestore: AngularFirestore) { }
  constructor() {
    // console.log(firebase.database());
    // this.getSurveys();
  }

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

  // getSurveys(): any {
  //   firebase.database().ref('/surveys/', (snapshot) => {
  //     console.log(snapshot.val());
  //   });
  //   return;
  //   // return this.firestore.collection('surveys').snapshotChanges();
  // }

  // addSurvey(survey) {
  //   //this.firestore.collection('survey').add(survey);
  // }
}
