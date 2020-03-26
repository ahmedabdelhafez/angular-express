import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[Reactivevalidation]'
})
export class ReactivevalidationDirective {

  @Input() formName: FormGroup;
  @Input() parentName: string;
  @Input() itemName: string;
  errorMsgId: string;
  errorMsgTag: string;

  constructor(private el: ElementRef, private render: Renderer2, private translate: TranslateService) {
    this.errorMsgId = this.el.nativeElement.id; // current element ID
    this.errorMsgTag =
      `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">some data here</span></div>`;
  }

  @HostListener('focusout') onFocusout() {
    if (this.parentName != null || this.parentName != undefined) {
      ///// << when the formcontrol have parent >> /////
      if (this.formName.get(this.parentName).get(this.itemName).hasError('required') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">this fiels is required ya man</span></div>`);
      } else if (this.formName.get(this.parentName).get(this.itemName).hasError('minlength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">minlength error ya man</span></div>`);
      } else if (this.formName.get(this.parentName).get(this.itemName).hasError('maxlength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">maxlength error ya man</span></div>`);
      } else if (this.formName.get(this.parentName).get(this.itemName).hasError('max') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">max value error</span></div>`);
      } else if (this.formName.get(this.parentName).get(this.itemName).hasError('min') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">min value error</span></div>`);
      }

    } else {
      ///// << if control name dosn't have any parent >> /////
      if (this.formName.get(this.itemName).hasError('required') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">this fiels is required ya man</span></div>`);
      } else if (this.formName.get(this.itemName).hasError('minlength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">minlength error ya man</span></div>`);
      } else if (this.formName.get(this.itemName).hasError('maxlength') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">maxlength error ya man</span></div>`);
      } else if (this.formName.get(this.itemName).hasError('max') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">max value error</span></div>`);
      } else if (this.formName.get(this.itemName).hasError('min') && document.getElementById(`errorMsg_${this.errorMsgId}`) == null) {
        this.el.nativeElement.insertAdjacentHTML('afterend', `<div id="errorMsg_${this.errorMsgId}" class="has-error"><span class="font-13 font-bold text-danger">min value error</span></div>`);
      }

    }
  }

  @HostListener('focusin') onFocusin() {
    console.log(`in the element ${this.el.nativeElement.name} and ID: ${this.el.nativeElement.id}`);
    if (document.getElementById(`errorMsg_${this.errorMsgId}`) !== null) {
      document.getElementById(`errorMsg_${this.errorMsgId}`).remove();
    }
  }

}
