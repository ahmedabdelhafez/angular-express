import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    PopoverModule,
    TooltipModule,
    CarouselModule,
    AccordionModule,
    TabsModule,
    CollapseModule,
    BsDatepickerModule,
    ModalModule,
    BsDropdownModule,
    TimepickerModule,
    TypeaheadModule
  ]
})
export class BootstrapngxModule { }
