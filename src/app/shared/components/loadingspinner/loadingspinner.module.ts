import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingspinnerComponent } from './loadingspinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingspinnerComponent],
  exports:[LoadingspinnerComponent]
})
export class LoadingspinnerModule { }
