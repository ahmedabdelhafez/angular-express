import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppAlert } from 'src/app/shared/util/AppAlert';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-teststyle',
  templateUrl: './teststyle.component.html',
  styleUrls: ['./teststyle.component.scss'],
  animations: [
    trigger('fadeIn', [
      // state('in', style({
      //   'opacity': '1'
      // })),
      transition('void => *', [
        style({
          'transform': 'translateX(100%)',
          'opacity': 1
        }),
        animate('1.25s ease-in-out')
      ]),
      // << end state 1 >> //
      transition('* => void', [
        animate('700ms ease-out', style({
          'transform': 'skewX(-25deg) translateX(50%)',
          'color': 'red',
          'opacity': 0
        }))
      ])
      // << end state 2 >> //
    ])
  ]
})
export class TeststyleComponent implements OnInit {

  mainArr = [{ id: 1, name: 'Google', status: true }, { id: 1, name: 'Yahoo', status: false }, { id: 1, name: 'Apple', status: false }]

  constructor() { }

  ngOnInit() {


  }

  onChange(event) {
    console.log(event);
    console.log(this.mainArr);

  }


  // checkAll() {
  //   this.mainArr = this.mainArr.map(ele => {
  //     if (ele.status === false) {
  //       ele.status = true;
  //       return ele;
  //     }
  //     else {
  //       // ele.status = false;
  //       return ele;
  //     }
  //   });
  //   console.log('===============');
  //   console.log(this.mainArr);
  // }



}
