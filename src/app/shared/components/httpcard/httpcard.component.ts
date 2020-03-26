import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { tap, delay } from "rxjs/operators";
import { PostService } from "src/app/services/post.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-httpcard",
  templateUrl: "./httpcard.component.html",
  styleUrls: ["./httpcard.component.scss"],
  providers: [NgxSpinnerService]
})
export class HttpcardComponent implements OnInit {
  isLoding = false;
  postData;

  @Input("postId") postId;
  @Input("dataToView") dataToView: TemplateRef<any>;

  constructor(
    private posts: PostService,
    private ngxSpinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  getPost(id?) {
    // this.isLoding = true;
    this.ngxSpinner.show("spin1", {
      bdColor: "#111d5e",
      color: "#ffbd69",
      fullScreen: false,
      size: "medium",
      type:'ball-beat'
    });
    this.posts
      .getPost(this.postId)
      .pipe(
        delay(5000),
        tap(e => {
          console.log("tap method works well");
          console.log(e);
        })
      )
      .subscribe(
        data => {
          this.postData = data;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => {
          // this.isLoding = false;
          this.ngxSpinner.hide("spin1");
        }
      );
  }
}
