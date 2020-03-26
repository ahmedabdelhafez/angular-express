import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, BreadcrumbComponent, SideNavbarComponent],
  imports: [
    CommonModule, SharedModule, CoreModule
  ],
  exports: [
    NavbarComponent, FooterComponent, BreadcrumbComponent, SideNavbarComponent, 
  ]
})
export class LayoutModule { }
