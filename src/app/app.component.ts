import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import Swal from "sweetalert2";
import * as _moment from "moment";
import { AppAlert } from "./shared/util/AppAlert";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "./core/translation.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { filter, map } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { ConfigAppService } from "./services/ConfigApp.service";

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MM YYYY"
  }
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: "ar" },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    //format: MAT_MOMENT_DATE_FORMATS
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class AppComponent implements OnInit {
  isChecked: boolean;
  dateValue: any;

  constructor(
    private translate: TranslateService,
    private dateAdapter: DateAdapter<Date>,
    private uiloaderservice: NgxUiLoaderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // this.translate.setDefaultLang('ar');
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // this.translate.use('ar');
    ///change the language for material date picker
    this.translate.onDefaultLangChange.subscribe(data => {
      // console.log(data);
      this.dateAdapter.setLocale(data.lang);
    });
  }

  dateClass = (d: Date) => {
    const date = d.getDate();
    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? "example-custom-date-class" : undefined;
  };

  dataTranslate: any;
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map(() => {
          let route = this.activatedRoute;
          // find first route with a title set (if any)
          while (!this.getTitle(route) && route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === "primary"),
        map(route => this.getTitle(route)),
        filter((title): title is string => title !== undefined)
      )
      .subscribe(title => {
        this.titleService.setTitle(title);
      });

    //************************** */
    this.uiloaderservice.start(); // start foreground loading with 'default' id
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.uiloaderservice.stop(); // stop foreground loading with 'default' id
    }, 1000);
  }

  private getTitle(route: ActivatedRoute): string | undefined {
    const routeData = route.snapshot.data;
    if (routeData && routeData.title) {
      return routeData.title;
    }
    return undefined;
  }
  config = {
    paddingAtStart: false,
    classname: "",
    listBackgroundColor: "rgb(208, 241, 239)",
    fontColor: "rgb(8, 54, 71)",
    // backgroundColor: 'orange',
    selectedListFontColor: "salmon"
  };

  selectedItem(event) {
    console.log(event.target.value);
  }

  customDateClass = (d: Date) => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? "bg-danger" : undefined;
  };
}
