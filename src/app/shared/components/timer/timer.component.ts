import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  vDate = moment(new Date(), 'DD/MM/YYYY', true).format('DD/MM/YYYY');
  vTime = moment(new Date(), 'hh:mm:ss', true);
  vDayNow = moment(new Date(), 'DD/MM/YYYY').get('day');
  myDate: Date = new Date();
  fullTime: number;
  vFullDateTime;
  constructor() {
    // moment.locale('en', localization);

  }

  mytimer$ = interval(1000);
  ngOnInit(): void {
    this.fullTime = this.myDate.getTime();
    // setInterval(() => {
    //   this.myDate = new Date();
    //   this.fullTime = this.myDate.getTime();
    //   //console.log(this.fullTime); // just testing if it is working
    // }, 60000);

    this.mytimer$.subscribe(data => {
      this.myDate = new Date();
      this.fullTime = this.myDate.getTime();
      //console.log(this.fullTime); // just testing if it is working
    });

    this.vFullDateTime = `اليوم: ${this.dayNames[this.vDayNow]} ${this.vDate}  - الساعة: `;
  }

}
