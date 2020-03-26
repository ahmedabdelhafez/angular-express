import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCard1Component } from './flip-card1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlipCard1Component],
  exports:[FlipCard1Component]
})
export class FlipCard1Module { }
