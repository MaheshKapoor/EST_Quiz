import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {

  constructor(public quizService: QuizService, public router: Router) { }


  ngOnInit() {
    //document.getElementById("seo-main-text").style.display = "none";
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
      this.router.navigate(['/link1'], {queryParams: {id: localStorage.getItem('id')}});
  }

  getAnswers() {
    this.router.navigate(['/answers']);
  }
}
