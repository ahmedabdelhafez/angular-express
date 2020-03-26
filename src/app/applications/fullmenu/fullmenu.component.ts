import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
  AfterViewInit
} from "@angular/core";

import flatpickr from "flatpickr";
import Arabic from "flatpickr/dist/l10n/ar.js";
import { NgForm } from "@angular/forms";
import { PostService } from "../../services/post.service";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";
import Swiper from "swiper";

@Component({
  selector: "app-fullmenu",
  templateUrl: "./fullmenu.component.html",
  styleUrls: ["./fullmenu.component.scss"]
})
export class FullmenuComponent implements OnInit, AfterViewInit {
  imgItems = [
    "assets/images/slider/1.jpg",
    "assets/images/slider/2.jpg",
    "assets/images/slider/3.jpg",
    "assets/images/slider/4.jpg",
    "assets/images/slider/5.jpg"
  ];

  /// ngx gallery options
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  // << menu item ref >> //
  @ViewChild("dat1", { static: false }) date1: ElementRef;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
    flatpickr("#date1", {
      enableTime: true,
      dateFormat: "d/m/Y H:i",
      clickOpens: true,
      mode: "single",
      conjunction: "*",
      disable: [
        {
          from: "05-07-2019",
          to: "09-07-2019"
        },
        {
          from: "25-07-2019",
          to: "28-07-2019"
        }
      ],
      closeOnSelect: true,
      locale: Arabic.ar,
      minuteIncrement: 1
    });

    // ##########################################################
    this.galleryOptions = [
      {
        width: "100%",
        height: "500px",
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Fade,
        imageArrows: true,
        imageBullets: false,
        imageAutoPlay: false,
        thumbnails: false,
        imageInfinityMove: true,
        previewDownload: true,
        previewFullscreen: true,
        previewInfinityMove: true,
        previewAnimation: false,
        imageDescription: true,
        previewDescription: true,
        previewBullets: true
      },
      // max-width 800
      {
        breakpoint: 700,
        width: "100%",
        height: "100vh",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: "../../../assets/images/slider/1.jpg",
        medium: "../../../assets/images/slider/1.jpg",
        big: "../../../assets/images/slider/1.jpg",
        label: "Text Label",
        description: "this is the first image"
      },
      {
        small: "../../../assets/images/slider/2.jpg",
        medium: "../../../assets/images/slider/2.jpg",
        big: "../../../assets/images/slider/2.jpg",
        description: "this is the second image"
      },
      {
        small: "../../../assets/images/slider/3.jpg",
        medium: "../../../assets/images/slider/3.jpg",
        big: "../../../assets/images/slider/3.jpg",
        description: "this is the third image"
      }
    ];
  }

  ngAfterViewInit(): void {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      init: true,
      speed: 800 ,
      updateOnWindowResize:true,
      setWrapperSize:true,
      effect: 'fade',
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets'
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar"
      // }
    });
  }

  saveForm(ngform: NgForm) {
    console.log(ngform.value);
  }
}
