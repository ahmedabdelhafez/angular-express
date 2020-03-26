import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  userPrice = 0;

  @Input('myname') myname;
  @Output('price') outPrice = new EventEmitter<number>(null);
  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.outPrice.emit(this.userPrice);
  }

}
