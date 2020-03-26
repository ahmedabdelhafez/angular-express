import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLatinOnly]'
})

export class LatinOnlyDirective {


  regexStr = /^[A-Za-z ]*$/;
  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) {
  }


  @HostListener('input', ['$event']) onKeyPress(event) {
    const val = this.el.nativeElement.value;
    if (!this.regexStr.test(val)) {
      this.el.nativeElement.value = '';
    }
  }

  // @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
  //   this.validateFields(event);
  //   // return new RegExp(this.regexStr).test(event.key);

  // }

  // validateFields(event) {
  //   setTimeout(() => {

  //     this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
  //     // this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
  //     event.preventDefault();

  //   }, 100);
  // }

}
