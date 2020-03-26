import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective implements OnInit {


  constructor(private el: ElementRef, private render: Renderer2) { }

  x = 'admin';
  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'visibility', 'visible');

  }



}
