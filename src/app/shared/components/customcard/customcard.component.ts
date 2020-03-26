import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.scss']
})
export class CustomcardComponent implements OnInit {
  @Input('cardTitle') cardTitle: string;
  @Input('cardSubtitle') cardSubtitle?: string = null;
  constructor() { }

  ngOnInit() {
  }

}
