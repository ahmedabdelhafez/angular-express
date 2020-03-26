import { Directive, ElementRef, isDevMode, HostListener, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appCurrencyIcon]'
})
export class CurrencyIconDirective implements AfterViewInit {


  constructor(private el: ElementRef, @Inject(DOCUMENT) document) {
    console.log(`is dev mode: ${isDevMode()}`);
  }

  selectItemName = this.el.nativeElement.name;

  @HostListener('change') onListChange() {
    let selectItemId = document.getElementById(this.el.nativeElement.id as string);
    let currValueId = document.getElementById('currValue');
    let currValue = this.el.nativeElement.value;
    console.log(`from Directive Item ID: ${selectItemId} && It's Name: ${this.selectItemName}`);

    if (currValueId === null) {
      selectItemId.insertAdjacentHTML('afterend', `<img id="currValue" src="../../../assets/icons/navbar-icons/calendar-outline.png" width="32" height="32">`);
    } else {
      currValueId.remove();
      selectItemId.insertAdjacentHTML('afterend', `<img id="currValue" src="../../../assets/icons/navbar-icons/camera-outline.png" width="32" height="32">`);
    }
  }

  ngAfterViewInit(): void {
    console.log('i will fire after the view finish renderrr');

  }
}
