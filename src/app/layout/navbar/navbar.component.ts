import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from "@angular/common";
import { DateAdapter } from "@angular/material";
import { TranslationService } from "src/app/core/translation.service";
import { PostService } from "src/app/services/post.service";
import { ConfigAppService } from "src/app/services/ConfigApp.service";

declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  navRoles = false;
  sidenavState: string = "open";

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document,
    private dateAdapter: DateAdapter<Date>,
    private translation: TranslationService,
    private postService: PostService,
    private configAppService: ConfigAppService
  ) {}
  appConfig: any;
  ngOnInit() {
    this.translate.setDefaultLang("en");
    this.translate.use("en");
    ////////////////////////////////////////////////////////////////////////////
    this.configAppService
      .getConfig()
      .then(data => {
        console.log("App Init well thanks");
        console.log(data);
        this.appConfig = data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeLang(lang?: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    ////////////////////////////////////
    ///// << Change the direction of the page >> /////
    if (lang === "ar") {
      this.translation.setDefaultLang(lang);
      this.dateAdapter.setLocale("ar");
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      this.document
        .getElementById("theme")
        .setAttribute("href", "assets/bootstrap-rtl/bootstrap-rtl.min.css");
      // this line to change the dire of the index page
      this.document.getElementById("htmlParent").setAttribute("dir", "rtl");
      // this line to change the language
      this.document.getElementById("htmlParent").setAttribute("lang", "ar");
      console.log("Used lang ar: " + this.translate.getDefaultLang());
    } else {
      this.translation.setDefaultLang(lang);
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      this.dateAdapter.setLocale("en");
      // this.document.getElementById("theme").setAttribute("href","assets/bootstrap/css/bootstrap.min.css");
      this.document.getElementById("theme").setAttribute("href", "");
      // this line to change the dire of the index page
      this.document.getElementById("htmlParent").setAttribute("dir", "ltr");
      // this line to change the language
      this.document.getElementById("htmlParent").setAttribute("lang", "en-US");
    }
  }

  // toggleMenu() {
  //   $(function () {
  //     $(".toggle").on("click", function () {
  //       if ($(".item").hasClass("active")) {
  //         $(".item").removeClass("active");
  //         $(this).find("a").html("<i class='fa fa-bars'></i>");
  //       } else {
  //         $(".item").addClass("active");
  //         $(this).find("a").html("<i class='fa fa-times'></i>");
  //       }
  //     });
  //   });
  // }

  openSidenav() {
    console.log("send open action");

    this.postService.toggleNav("open");
  }

  // changeLanguage(lang?: string) {
  //   console.log(`langugae changed to ** ${lang} ** From Navbar `);
  //   this.translate.setDefaultLang(lang);
  //   this.translate.use(lang);
  //   ///// << Change the direction of the page >> /////
  //   if (lang === 'ar') {
  //     this.document.getElementById('theme').setAttribute('href', "../../../assets/bootstrap-rtl/bootstrap-rtl.min.css");
  //     console.log('Used lang ar: ' + this.translate.getDefaultLang());
  //   } else {
  //     this.document.getElementById('theme').setAttribute('href', "../../../assets/bootstrap/css/bootstrap.min.css");
  //   }
  // }
}
