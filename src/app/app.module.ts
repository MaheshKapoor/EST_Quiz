import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsFormComponent } from './event-details-form/event-details-form.component';
import { FooterComponent } from './footer/footer.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link3Component } from './link3/link3.component';
import { Link4Component } from './link4/link4.component';
import { Link5Component } from './link5/link5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { FontControllerComponent } from './font-controller/font-controller.component';
import {NgArrayPipesModule} from "ngx-pipes";
import {NgxPrintModule} from 'ngx-print';
import { PrintpageComponent } from './printpage/printpage.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { PreExamComponent } from './pre-exam/pre-exam.component';
import {FileLoaderService} from "./services/file.loader.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {QuizService} from "./services/quiz.service";
import { AnswersComponent } from './answers/answers.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDetailsFormComponent,
    FooterComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    Link4Component,
    Link5Component,
    FontControllerComponent,
    PrintpageComponent,
    TermAndConditionComponent,
    ExamComponent,
    ResultComponent,
    ProgressBarComponent,
    ScoreCardComponent,
    PreExamComponent,
    AnswersComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgArrayPipesModule,
    NgxPrintModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [FileLoaderService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
