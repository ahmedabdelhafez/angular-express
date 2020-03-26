import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit
} from "@angular/core";

@Directive({
  selector: "[CustomPopover]"
})
export class CustomPopoverDirective implements AfterViewInit {
  constructor(private el: ElementRef, private render: Renderer2) {}
  @Input("tooltipText") tooltipText: string = "";
  @HostListener("mouseover") onDbClick() {
    console.log("dobule click event from directive");
    this.el.nativeElement.backgroundColor = 'red';
    this.render.setAttribute(
      this.el.nativeElement,
      "tooltip",
      "welcome mr ahmed how are you"
    );
  }

  @HostListener("mouseout") onOut() {
    console.log("mouse out");
    this.el.nativeElement.style.backgroundColor = '';
    this.render.removeAttribute(this.el.nativeElement, "tooltip");
  }

  ngAfterViewInit(): void {}
}
