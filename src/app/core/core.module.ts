import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared/shared.module";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';

@NgModule({
  declarations: [
    FooterComponent,
     SliderComponent,
     PopularItemsComponent,
  ],
  exports: [
    FooterComponent,
    SliderComponent,
    PopularItemsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    SwiperModule
  ]
})
export class CoreModule { }
