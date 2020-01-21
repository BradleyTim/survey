import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'; 
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveydetailComponent } from './surveydetail/surveydetail.component';


const appRoutes: Routes = [
  { path: 'success', component: SuccessComponent},
  { path: 'survey', component: SurveyformComponent},
  { path: 'results/:name', component: SurveydetailComponent},
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
    SurveysComponent,
    SurveydetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'simbasurvey'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
