import { Component, OnInit } from "@angular/core";
import Typed from "typed.js/src/typed.js";
@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.scss"]
})
export class AboutusComponent implements OnInit {
  imgLink = "../../../assets/icons/navbar-icons/calendar-outline.png";
  imgLink2 = "../../../assets/icons/navbar-icons/camera-outline.png";
  options = {
    strings: [
      "أفضل عمالة ماهرة في مصر",
      "أفضل خبرات",
      "مؤهلات عالية و خبرة في كافة المجالات",
      "نتطرق للأفضل"
    ],
    typeSpeed: 100,
    backSpeed: 40,
    showCursor: false,
    cursorChar: "|",
    loop: true
  };

  postItem = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {
    // const typed = new Typed('.typed-element', this.options);
  }
}
