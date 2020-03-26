import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { trigger, state, transition, stagger, query, animate, style, keyframes } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { of, interval, timer, Subject } from 'rxjs';
import Timer from 'easytimer.js';
import * as moment from 'moment';
import flatpickr from 'flatpickr';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { debounceTime, distinctUntilChanged, switchMap, filter, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  animations: [
    trigger('toggle-search', [
      transition(':enter', [
        style({
          'transform': 'translateX(-50px)',
          'opacity': '1'
        }), animate('2s 200ms ease-in')
      ]),
      transition(':leave', [
        style({
          'transform': 'translateX(50px)',
          'opacity': '0'
        }), animate('1s ease-out')
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('400ms', [
          animate('1.5s ease-in-out', keyframes([
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(35px)', offset: 0.6 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))
        ])
          , { optional: true })
      ])
    ]),
    // show hide search item
    trigger('showhide', [
      state('hide', style({
        'transform': 'translateY(-75%)',
        'opacity': '0',
        'visibility': 'hidden'
      })),
      state('show', style({
        'transform': 'translateY(0)',
        'opacity': '1',
        'visibility': 'visible'
      })),
      transition('show => hide', animate('1s 100ms ease-out')),
      transition('hide => show', animate('750ms 100ms ease-in'))
    ])
  ]
})
export class ObservableComponent implements OnInit {
  searchText: string = '';
  valEvent = '';
  alldata = [];
  searchTextChanged: Subject<string> = new Subject<string>();


  public barChartOptions: ChartOptions = {
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [66, 83, 88, 93, 84, 28, 75], label: 'BMW' },
    { data: [22, 57, 66, 81, 56, 56, 80], label: 'Audi' },
    { data: [56, 47, 48, 83, 77, 33, 40], label: 'Porch' },
    { data: [65, 64, 94, 81, 33, 55, 95], label: 'Mercedes' },
    { data: [28, 48, 40, 19, 86, 27, 100], label: 'Mini' }
  ];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.searchTextChanged.pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      // start searching and change the  value
      switchMap(() =>
        this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      )
    ).subscribe((data: []) => {
      console.log('show data after 1.5 second');
      if (!this.valEvent) {
        this.alldata = [];
      } else {
        this.alldata = [];
        this.alldata = data.filter((ele: any) => {
          return ele.title.includes(this.valEvent);
        });
      }
    })

  }


  logSearchData(event) {
    // console.log(event);
    this.valEvent = event;
    this.searchTextChanged.next(event);
  }



}
