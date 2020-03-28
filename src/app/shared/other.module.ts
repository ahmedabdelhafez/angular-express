import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { CustomFormsModule } from "ng2-validation";
import { QRCodeModule } from "angularx-qrcode";
import { NgxBarcodeModule } from 'ngx-barcode';
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ChartsModule } from "ng2-charts";
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSelectModule,
    CustomFormsModule,
    NgxBarcodeModule,
    Ng2FlatpickrModule,
    QRCodeModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  exports: [
    NgSelectModule,
    NgxBarcodeModule,
    Ng2FlatpickrModule,
    ChartsModule,
    QRCodeModule,
    NgCircleProgressModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OtherModule {}
