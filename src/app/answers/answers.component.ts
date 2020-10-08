import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.sass']
})
export class AnswersComponent implements OnInit {

  constructor(public quizService: QuizService, public router: Router) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qnProgress')) == this.quizService.numberOfQuestions) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

      this.quizService.correctAnswerCount = 0;
      for(let e of this.quizService.qns){
        if (e.answer == e.selectedAnswer)
          this.quizService.correctAnswerCount++;
      }
    }
    else
      this.router.navigate(['/link1']);
  }

  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.restart();
    });
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }






}
