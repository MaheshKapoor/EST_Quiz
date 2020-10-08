import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FileLoaderService} from "../services/file.loader.service";
import {QuizService} from "../services/quiz.service";
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.sass']
})
export class ExamComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute, public fileloader: FileLoaderService,
  public quizService: QuizService, public router: Router, public meta: Meta, public title: Title) { }

  ngOnInit() {
    this.loadExamSet();

  }

  loadExamSet(){
    this.route.paramMap.subscribe(params => {
      console.log(params.get('examCode'));
      localStorage.setItem('id', params.get('examCode'));
    });

      if ((this.id === localStorage.getItem('current')) && localStorage.getItem('qns')) {

        this.quizService.seconds = 0;//parseInt(localStorage.getItem('seconds'));
        this.quizService.qnProgress = 0;// parseInt(localStorage.getItem('qnProgress'));
        this.quizService.numberOfQuestions = parseInt(localStorage.getItem('numberOfQuestion'));
        this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

        if (this.quizService.qnProgress == parseInt(localStorage.getItem('numberOfQuestion'))){
          this.router.navigate(['/result'], {queryParamsHandling:'preserve'});}
        else{
          this.startTimer();
        }
      }
      else {
        localStorage.setItem('current',this.id);
        this.showLoadingSpinner();
        this.quizService.seconds = 0;
        this.quizService.qnProgress = 0;
        this.fileloader.getData().subscribe(
          (data: any) => {
            localStorage.setItem('nextSet',data.data.extraDetails.nextSet);
            localStorage.setItem('previousNext',data.data.extraDetails.previousSet);
            localStorage.setItem('numberOfQuestion',data.data.extraDetails.numberOfQuestion);
            localStorage.setItem('pageTitle', data.data.extraDetails.quizTitle);
            this.quizService.numberOfQuestions=data.data.extraDetails.numberOfQuestion;
            this.quizService.qns = data.data.questions;
            this.updateMetaTags();
            this.hideLoadingSpinner();
            this.startTimer();
          }
        );
      }
    }



  startTimer(){
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    this.quizService.isNextDisable = false;

    this.quizService.qns[this.quizService.qnProgress].selectedAnswer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));

    if(qID==this.quizService.numberOfQuestions){
      this.quizService.isSubmitDisable=false;
    }

  }

  NextQuestion(qID){
    if( typeof this.quizService.qns[this.quizService.qnProgress].selectedAnswer !== 'undefined' &&
      this.quizService.qns[this.quizService.qnProgress].selectedAnswer){
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      this.quizService.isNextDisable = true;
    }
  }

  submitQuiz(qId){
    if (qId == this.quizService.numberOfQuestions) {
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
      this.quizService.isSubmitDisable=true;
    }
  }

  SkipQuestion(){
    this.quizService.qns[this.quizService.qnProgress].selectedAnswer = 6;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }
  updateMetaTags(){
    this.title.setTitle(localStorage.getItem("pageTitle"));
    this.meta.updateTag( {name: "description", content: localStorage.getItem("pageTitle") + "-Actual DKT full Practice test.Tips to pass DKT test in first attempt."});
  }
  showLoadingSpinner() {
    this.quizService.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.quizService.showSpinner = false;
  }
}
