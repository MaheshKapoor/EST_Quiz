import { Component, OnInit } from '@angular/core';

const DEFAULT_FONT_SIZE = 16;
@Component({
  selector: 'app-font-controller',
  templateUrl: './font-controller.component.html',
  styleUrls: ['./font-controller.component.css']
})
export class FontControllerComponent implements OnInit {
  fontSize;
  FontSize = 100;
  constructor() {
    this.fontSize = DEFAULT_FONT_SIZE;
  }

  printPage() {
    window.print();
  }
  decrease(){
    this.FontSize = this.FontSize - 10;
    document.getElementById('myappview').style.fontSize = this.FontSize + '%';

  }
  increase(){
    this.FontSize = this.FontSize + 10;
    document.getElementById('myappview').style.fontSize = this.FontSize + '%';

  }

  reset(){
    document.getElementById('myappview').style.fontSize = '100%';

  }
  ngOnInit() {
  }

}
