import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.sass']
})
export class ScoreCardComponent implements OnInit {

  constructor(public quizService: QuizService, public router: Router) { }
  scoreMessage: string;
  scorePercentage: number;
  scoreMessageColor: string;
  scoreImage:string;
  isPass:boolean=false;
  ngOnInit() {

    this.scorePercentage = (this.quizService.correctAnswerCount/this.quizService.numberOfQuestions) * 100;
    this.getScoreMessage();
  }

  getScoreMessage(){
    if(this.scorePercentage>91){
      this.scoreMessage ="You have passed the test. Keep it up !";
      this.scoreMessageColor = "green-text text-darken-3";
      this.scoreImage="assets/image/passgirl.png";
      this.isPass=true;
    }else{
      this.scoreMessage ="You have failed the test. Please try again !";
      this.scoreMessageColor = "red-text text-darken-2";
      this.scoreImage="assets/image/failgirl.png";
    }
  }

  fbShare() {
    /// let url = 'http://www.facebook.com/sharer.php?u='+ 'https://practisepoint.com/quiz?id=DKTNSW00E181003020';
    let url ="http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://practisepoint.com/quiz?id="+localStorage.getItem("id");
    let newwindow=window.open(url,'challenge to my friends ','height=500,width=520,top=200,left=300,resizable');
    if (window.focus) {
      newwindow.focus()
    }
  }

  getNextSet() {
    debugger;
    let nextSet = localStorage.getItem("nextSet");
    let currentSet = localStorage.getItem("current");

    if ((nextSet == null || nextSet == undefined ||nextSet == 'undefined') && currentSet.substr(0,3).length >0 && currentSet.substr(0,3) == "GKQ"){
      window.location.href = 'https://generalknowledgequestionss.blogspot.com/p/current-affair.html';
    } else if(nextSet.substr(0,3).length >0 && nextSet.substr(0,3) == "GKQ"){
      localStorage.setItem('id', nextSet);
      this.router.navigate(['/quiz'], {queryParams:{ id: nextSet }});
    }

    localStorage.removeItem("seconds");
    localStorage.removeItem("id");

    localStorage.removeItem("qns");
    localStorage.removeItem("qns");
    localStorage.removeItem("qnProgress");
    localStorage.removeItem("nextSet");
    localStorage.removeItem("previousNext");
    if (nextSet == null || nextSet == undefined ||nextSet == 'undefined'){
      this.router.navigate(['/dkt']);
    }else{
      localStorage.setItem('id', nextSet);
      this.router.navigate(['/quiz'], {queryParams:{ id: nextSet }});
    }
  }

  getPreviousSet() {
    debugger;
    localStorage.removeItem("seconds");
    localStorage.removeItem("id");
    localStorage.setItem('id', localStorage.getItem("previousNext"));
    localStorage.removeItem("qns");
    localStorage.removeItem("qns");
    localStorage.removeItem("qnProgress");
    localStorage.removeItem("nextSet");
    localStorage.removeItem("previousNext");
    this.router.navigate(['/quiz'], {queryParams:{ id: localStorage.getItem("id") }});

  }

  printPage() {
    window.print();
  }
}
