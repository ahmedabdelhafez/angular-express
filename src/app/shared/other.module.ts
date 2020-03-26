import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { CustomFormsModule } from "ng2-validation";
import { NgxAircalModule } from "ngx-aircal";
import { AngularMyDatePickerModule } from "angular-mydatepicker";
import { QRCodeModule } from "angularx-qrcode";
import { NgxBarcodeModule } from 'ngx-barcode';
import { AgGridModule } from "ag-grid-angular";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { FileUploadModule } from "ng2-file-upload";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { NgxGalleryModule } from "ngx-gallery";
import { ChartsModule } from "ng2-charts";
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSelectModule,
    CustomFormsModule,
    NgxAircalModule,
    AngularMyDatePickerModule,
    NgxBarcodeModule,
    AgGridModule.withComponents([]),
    CarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FileUploadModule,
    Ng2FlatpickrModule,
    NgxGalleryModule,
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
    NgxAircalModule,
    AngularMyDatePickerModule,
    NgxBarcodeModule,
    AgGridModule,
    CarouselModule,
    CalendarModule,
    FileUploadModule,
    Ng2FlatpickrModule,
    NgxGalleryModule,
    ChartsModule,
    QRCodeModule,
    NgCircleProgressModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OtherModule {}
