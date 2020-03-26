import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLatinwithnumber]'
})
export class LatinwithnumberDirective {

  constructor(private el: ElementRef) { }

  regexStr = /^[A-Z0-9<>]*$/;
  @HostListener('input', ['$event']) oninput(event) {
    const val = this.el.nativeElement.value;
    if (!this.regexStr.test(val)) {
      this.el.nativeElement.value = '';
    }
  }

}
