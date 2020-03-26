import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterupComponent } from './counterup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CounterupComponent],
  exports:[CounterupComponent]
})
export class CounterupModule { }
