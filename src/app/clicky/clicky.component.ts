import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicky',
  templateUrl: './clicky.component.html',
  styleUrls: ['./clicky.component.css']
})
export class ClickyComponent implements OnInit {
  red = false;
  green = false;
  blue = false;
  yellow = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickYellow(){
    this.yellow = !this.yellow
  }
  hower(){
    this.red = !this.red
  }
  passover1(){
    this.green = !this.green
  }
  clickoutside1(){
    this.blue = !this.blue
    setInterval( () => {this.blue = !this.blue }, 2000)
  }

}
