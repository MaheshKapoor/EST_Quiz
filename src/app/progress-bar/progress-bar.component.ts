import { Component, OnInit } from '@angular/core';
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit {


  constructor(public quizService: QuizService) { }

  ngOnInit() {
  }

  progressFactor = 100/this.quizService.numberOfQuestions;

}
