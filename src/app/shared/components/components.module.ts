import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { PrintComponent } from "./print/print.component";
import { TimerComponent } from "./timer/timer.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OtherModule } from "../other.module";
import { CustomcardComponent } from "./customcard/customcard.component";
import { HttpcardComponent } from "./httpcard/httpcard.component";
import { DialogsComponent } from "./dialogs/dialogs.component";
import { NgxSpinnerModule } from "ngx-spinner";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    DialogsComponent,
    PrintComponent,
    TimerComponent,
    CustomcardComponent,
    HttpcardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OtherModule,
    NgxSpinnerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [
    TranslateModule,
    NgxSpinnerModule,
    PrintComponent,
    TimerComponent,
    CustomcardComponent,
    HttpcardComponent,
    DialogsComponent
  ],
  entryComponents: [DialogsComponent]
})
export class ComponentModule {}
