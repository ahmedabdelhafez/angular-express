import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input('title') title: string;
  @Input('content') content: any;
  @Output('action') action:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
