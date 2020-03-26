import { Component, OnInit, Input, Output, EventEmitter, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit, OnChanges {

  @Input('section') section: string;
  @Input('styleFile') styleFile: string;
  @Output() sectionChange = new EventEmitter<any>();

  constructor(private ele: ElementRef) {
    if (this.section === undefined) {
      this.section = '';
    }
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes) {
    if (changes.section && changes.section.currentValue !== undefined
      && changes.section.currentValue !== '') {

    }
  }

  afterPrint() {
    console.log('after print');
    this.ele.nativeElement.children[0].innerHTML = '';
    this.sectionChange.emit('');
    this.section = '';

  }

  cssLink = '../../../../assets/bootstrap/css/bootstrap.min.css';
  printDiv() {
    if (this.section && this.section !== undefined && this.section !== '') {
      const printContents = document.getElementById(this.section).outerHTML;
      const originalContents = document.body.innerHTML;

      if (window) {
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
          const popup = window.open('', '_blank',
            'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,'
            + 'location=no,status=no,titlebar=no');

          popup.window.focus();
          popup.document.write(`<!DOCTYPE html><html><head>  
             <link rel="stylesheet" href="${this.cssLink}" media="screen,print">
             </head><body onload="window.print()"><div class="reward-body">
             ${printContents} </div></html>`);
          popup.onbeforeunload = function (event) {
            popup.close();
            return '.\n';
          };
          popup.onabort = function (event) {
            popup.document.close();
            popup.close();
          };
        } else {
          const popup = window.open('', '_blank', 'width=800,height=600');
          popup.document.open();
          popup.document.write(`<html><head>
            <link rel="stylesheet" href="" media="all">
            </head><body onload="window.print()">'  ${printContents}  '</html>`);
          popup.document.close();
        }

        // document.close();
      }
      return true;
    }
  }

  fetchStylesheets() {
    let output = '';
    for (let i = 0; i < document.styleSheets.length; i++) {
      output = output + ' <link rel="stylesheet" type="text/css" href="' +
        window.document.styleSheets[0].href + '" /> ';
    }
    return output;
  }

  fetchscriptSheets() {
    let output = '';
    for (let i = 0; i < document.scripts.length; i++) {
      output = output + ' <script type="text/javascript" src="' +
        window.document.scripts[0].src + '" /> ';
    }
    return output;
  }


  //// << >> ///


}
