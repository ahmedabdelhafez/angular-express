import { Component, OnInit } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dateValue: any;
  constructor() { }

  ngOnInit() {
    const countUp = new CountUp('countr', 5234, {
      startVal: 0,
      decimalPlaces: 0,
      duration: 5,
      //  numerals: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
    });
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
}
