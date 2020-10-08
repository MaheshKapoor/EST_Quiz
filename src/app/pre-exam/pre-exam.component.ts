import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pre-exam',
  templateUrl: './pre-exam.component.html',
  styleUrls: ['./pre-exam.component.sass']
})
export class PreExamComponent implements OnInit {
  examCode;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.examCode = params.get('examCode');
      console.log(params.get('examCode'));
    });
  }


  onStart() {
console.log("checked");
    this.router.navigate(['/exam/' + this.examCode]);
  }

  onCancel() {
    console.log("checked");
    this.router.navigate(['/link1']);
  }
}
