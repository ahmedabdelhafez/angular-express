import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Directive({
  selector: "[appRtl]"
})
export class RtlDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(data => {
      if (data.lang === "ar") {
        this.render.addClass(this.el.nativeElement, "rtl-item");
      } else {
        this.render.removeClass(this.el.nativeElement, "rtl-item");
      }
    });
  }
}
