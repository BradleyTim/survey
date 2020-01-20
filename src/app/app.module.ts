import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Firebase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import { SurveysComponent } from './surveys/surveys.component';

const appRoutes: Routes = [
  { path: 'success', component: SuccessComponent},
  { path: 'survey', component: SurveyformComponent},
  { path: 'results', component: SurveysComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: LandingpageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    AboutComponent,
    SuccessComponent,
    SurveyformComponent,
    SurveysComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig, 'simbasurvey'),
    // AngularFirestoreModule, // Only required for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
