import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { TranslationService } from "src/app/core/translation.service";
import { TranslateService } from "@ngx-translate/core";
import { isNullOrUndefined } from "util";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit {
  currentUrl = "";
  urlArr: string[] = [];
  translateUrlArr: string[] = [];
  incomeUrl: string;
  url = "home";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslationService,
    private translateService: TranslateService
  ) {}

  static readonly ROUTE_DATA_BREADCRUMB = "breadcrumb";
  readonly home = { icon: "fa fa-home", url: "home" };
  menuItems = [];

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.menuItems = this.createBreadcrumbs(this.activatedRoute.root))
      );
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = "home",
    breadcrumbs: any[] = []
  ): any[] {
    const children: ActivatedRoute[] = route.children;

    // if there is no childer
    if (children.length === 0) {
      console.log("all breadcrumbs");
      console.log(breadcrumbs);

      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map(segment => segment.path)
        .join("/");
      if (routeURL !== "") {
        url += `/${routeURL}`;
      }

      const label =
        child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
      if (!isNullOrUndefined(label)) {
        // breadcrumbs.push({ label, url });
        breadcrumbs.push(this.getUrlTranslation(url));
      }
      console.log("Child: " + url);

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

  getUrlTranslation(url: string): string {
    let currUrl: string;
    if (url === "home") {
      this.urlArr = [];
      // this.urlArr.push("home");
    } else {
      this.urlArr = [];
      this.urlArr = url.split("/");
      console.log("url arr: " + this.urlArr);
      // remove this first ele,emtn from the array
      this.urlArr.shift();
    }
    this.translateUrlArr = this.urlArr.map(ele => {
      // console.log('current elemnt: ' + ele);
      if (ele === "home" || ele === null || ele === "") {
        return this.translate.getTranslation("url-translate.home");
      } else {
        // << get the url before the query parameter (?) >> //
        return this.translate.getTranslation(
          "url-translate." +
            ele.substring(
              0,
              ele.indexOf("?", 1) !== -1 ? ele.indexOf("?", 1) : ele.length
            )
        );
      }
      // console.log(this.translate.getTranslation('url-translate.' + ele));
      //return this.translate.getTranslation('url-translate.' + ele);
    });
    // console.log(this.translateUrlArr);
    if (this.translateUrlArr.length === 1) {
      currUrl = this.translateUrlArr[0];
    } else {
      currUrl = this.translateUrlArr.join(" > ");
    }
    console.log("Final URL: " + currUrl);
    this.currentUrl = currUrl;
    return currUrl;
  }

  //#######################################################################################3
  //#######################<< my solutions >>################################################################3
  // ngOnInit() {

  //   this.router.events.subscribe(data => {
  //     if (data instanceof NavigationEnd) {
  //       console.log(this.activeRoute.snapshot.url);

  //       this.incomeUrl = data.urlAfterRedirects;
  //       console.log('Incomming url full');
  //       console.log(data.url);
  //       this.currentUrl = this.getUrlTranslation(data.url);
  //     }
  //   });
  //   // <<change url language when user changing the app language >> //
  //   this.translateService.onLangChange.subscribe(data => {
  //     this.currentUrl = this.getUrlTranslation(this.incomeUrl);
  //   });
  // }

  // getUrlTranslation(url: string) {
  //   let currUrl: string;
  //   if (url === '/') {
  //     this.urlArr = [];
  //     this.urlArr.push('home');
  //   } else {
  //     this.urlArr = [];
  //     this.urlArr = url.split('/');
  //     console.log('url arr: ' + this.urlArr);
  //     // remove this first ele,emtn from the array
  //     this.urlArr.shift()
  //   }
  //   this.translateUrlArr = this.urlArr.map((ele) => {

  //     // console.log('current elemnt: ' + ele);
  //     if (ele === '' || ele === null) {
  //       return this.translateService.instant('url-translate.home');
  //     } else {
  //       // << get the url before the query parameter (?) >> //
  //       return this.translate.getTranslation('url-translate.' + ele.substring(0, ele.indexOf('?', 1) !== -1 ? ele.indexOf('?', 1) : ele.length));
  //     }
  //     // console.log(this.translate.getTranslation('url-translate.' + ele));
  //     //return this.translate.getTranslation('url-translate.' + ele);
  //   });
  //   // console.log(this.translateUrlArr);
  //   if (this.translateUrlArr.length === 1) {
  //     currUrl = this.translateUrlArr[0];
  //   } else {
  //     currUrl = this.translateUrlArr.join('>');
  //   }
  //   console.log('Final URL: ' + currUrl);
  //   return currUrl;
  // }
}
