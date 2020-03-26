import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.scss']
})
export class SwiperSliderComponent implements OnInit, AfterViewInit {

  @Input('ImageList') ImageList = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      init: true,
      speed: 600 ,
      updateOnWindowResize:true,
      setWrapperSize:true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }

}
