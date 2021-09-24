import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from "../material/material.module";




@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [CommonModule, MaterialModule, HttpClientModule],
  providers: []
})
export class SharedModule {
}
