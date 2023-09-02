import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer: any = setInterval(() => {return this.timer++}, 1000);
  svgTime = "../../../assets/svg/time-svgrepo-com.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
