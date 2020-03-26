import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { BootstrapngxModule } from "./bootstrapngx.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ItemvalidationDirective } from "./directive/itemvalidation.directive";
import { ReactivevalidationDirective } from "./directive/reactivevalidation.directive";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OtherModule } from "./other.module";
import { ArabicOnlyDirective } from "./directive/arabic-only.directive";
import { LatinOnlyDirective } from "./directive/latin-only.directive";
import { LatinwithnumberDirective } from "./directive/latinwithnumber.directive";
import { SummryPipe } from "./pipes/summry.pipe";
import { CurrencyIconDirective } from "./directive/currency-icon.directive";
import { RolesDirective } from "./directive/roles.directive";
import { CustomPopoverDirective } from "./directive/custom-popover.directive";
import { RtlDirective } from './directive/rtl.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [
    ItemvalidationDirective,
    ReactivevalidationDirective,
    ArabicOnlyDirective,
    LatinOnlyDirective,
    LatinwithnumberDirective,
    SummryPipe,
    CurrencyIconDirective,
    RolesDirective,
    CustomPopoverDirective,
    RtlDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapngxModule,
    OtherModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    BootstrapngxModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ItemvalidationDirective,
    ReactivevalidationDirective,
    ArabicOnlyDirective,
    LatinOnlyDirective,
    LatinwithnumberDirective,
    SummryPipe,
    CurrencyIconDirective,
    RolesDirective,
    CustomPopoverDirective,
    RtlDirective
  ]
})
export class SharedModule {}
