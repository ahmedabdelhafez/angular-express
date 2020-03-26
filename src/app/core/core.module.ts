import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, AppRoutingModule, MaterialModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: []
})
export class CoreModule { }
