import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Survey } from './survey';

@Injectable()
export class DataService {

  constructor(private firestore: AngularFirestore) {

  }

  getSurveys() {
    return this.firestore.collection('surveys').snapshotChanges();
  }

  addSurvey(data) {
    return this.firestore.collection('surveys').add(data);
  }


  // getSurveys(): any[] {
  //   if (localStorage.getItem("surveys") == null) {
  //     return [];
  //   } else {
  //     return JSON.parse(localStorage.getItem("surveys"));
  //   }
  // }

  // addSurvey(survey: any): void {
  //   localStorage.setItem(
  //     "surveys",
  //     JSON.stringify([survey, ...JSON.parse(localStorage.getItem("surveys"))])
  //   );
  // }
}
