import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER
} from "@angular/core";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorhandlerService } from "./core/errorhandler.service";
import { CoreModule } from "./core/core.module";
import { LayoutModule } from "./layout/layout.module";
import {
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule
} from "ngx-ui-loader";
import { LoginComponent } from "./login/login.component";
import { ApplicationsModule } from "./applications/applications.module";
import { DashboardComponent } from "./applications/dashboard/dashboard.component";
import { ComponentModule } from "./shared/components/components.module";
import { HomeComponent } from "./layout/home/home.component";
import { MaterialModule } from "./shared/material.module";
import { LoadingspinnerModule } from "./shared/components/loadingspinner/loadingspinner.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { ConfigAppService } from "./services/ConfigApp.service";
import { HttpConfigService } from "./services/httpConfig.service";

export function loadConfigurations(configAppService: ConfigAppService) {
  return () => configAppService.getConfig();
}
@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    LayoutModule,
    ApplicationsModule,
    ComponentModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule.forRoot({
      showForeground: true
    }),
    LoadingspinnerModule,
    NgxSpinnerModule
  ],
  providers: [
    Title,
    HttpConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorhandlerService,
      multi: true
    },
    ConfigAppService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [ConfigAppService],
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
