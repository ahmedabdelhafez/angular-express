import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { TranslationService } from '../../core/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appItemvalidation]'
})
export class ItemvalidationDirective implements OnInit, OnDestroy {
  /*
  createBy: Hany Omar ,,, completeBy: Ahmed Abdelhafez
  usage: used to validate form inputs using [ng2-validation] from npm
  our validator for[
    required,
    min,
    max,
    validateLength
    rangeLength,
    range >> for range between [1000 , 2000],
    digits >> for number fields only,
    creditCard
  ]
  */
  @Input() htmlControl: NgModel;

  errorMsgTag: string;
  errorMsgId: string;
  DataNotValid: any;
  translateObject: any = {};
  transSub: Subscription;
  constructor(private el: ElementRef, private render: Renderer2, private translate: TranslateService) {
    this.errorMsgId = this.el.nativeElement.id; // current element ID
    this.errorMsgTag =
      `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.DataNotValid}</span></div>`;
  }
  validationValue: string[] = [
    'validation.required', 'validation.maxlength', 'validation.minlength',
    'validation.max', 'validation.min', 'validation.email', 'validation.range',
    'validation.digits', 'validation.phone', 'validation.rangelength',
    'validation.unknownerror'
  ];
  ngOnInit(): void {
    this.transSub = this.translate.get(this.validationValue).subscribe(
      (data) => {
        this.translateObject = data;
      },
      (err) => {
        console.error('an error occoured while translating data');
      })
  }
  //////////////////////////////////////////////////
  @HostListener('focusout') onMouseOut() {
    let itemType = this.el.nativeElement.type;
    if (this.htmlControl.hasError('required') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.required']}</span></div>`);
      this.render.setAttribute(this.el.nativeElement, 'tooltip', 'this filed is required');
    } else if (this.htmlControl.hasError('rangeLength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.rangelength']}</span></div>`);
    } else if (this.htmlControl.hasError('min') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.min']}</span></div>`);
    } else if (this.htmlControl.hasError('max') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.max']}</span></div>`);
    } else if (this.htmlControl.hasError('maxlength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      let maxVal = this.htmlControl.errors;
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.maxlength']} ${maxVal}</span></div>`);
    } else if (this.htmlControl.hasError('minlength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      let minLength = this.htmlControl.errors.minlength.requiredLength;
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.minlength']} ${minLength}</span></div>`);
    } else if (this.htmlControl.hasError('email') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.email']}</span></div>`);
    } else if (this.htmlControl.hasError('range') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.range']}</span></div>`);
    } else if (this.htmlControl.hasError('digits') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.digits']}</span></div>`);
    } else if (this.htmlControl.hasError('creditCard') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      // tslint:disable-next-line: max-line-length
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.creditcard']}</span></div>`);
    } else if (this.htmlControl.hasError('phone') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
      // tslint:disable-next-line: max-line-length
      this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">${this.translateObject['validation.phone']}</span></div>`);
    }
  }

  @HostListener('focusin') onMouseEnter() {
    console.log('focusin', ` errorMsg_${this.errorMsgId}`);
    if (document.getElementById(`errorMsg_${this.errorMsgId}`) !== null) {
      document.getElementById(`errorMsg_${this.errorMsgId}`).remove();
    }
  }

  // @HostListener('change') onChange() {
  //   console.log('change', `errorMsg_${this.errorMsgId}`);
  //   if (this.htmlControl.hasError('required') &&
  //     (document.getElementById(`errorMsg_${this.errorMsgId}`) == null)) {
  //     this.el.nativeElement.insertAdjacentHTML('afterend', this.errorMsgTag);
  //   }
  // }

  private isArray(itemArray): boolean {
    return Array.isArray(itemArray);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.transSub.unsubscribe();
  }

}
