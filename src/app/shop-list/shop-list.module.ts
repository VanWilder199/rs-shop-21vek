import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonListComponent } from './components/button-list/button-list.component';
import { ShopListPageComponent } from './page/shop-list-page/shop-list-page.component';
import {SharedModule} from "../shared/shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import {ShopListRoutingModule} from "./shop-list-routing.module";
import { CardItemComponent } from './components/card-item/card-item.component';
import {AppModule} from "../app.module";
import {SwitchColorToAmountDirective} from "../shared/directive/switch-color-to-amount.directive";
import {SwitchColorToClickDirective} from "../shared/directive/switch-color-to-click.directive";
import { CardItemDetailsComponent } from './components/card-item-details/card-item-details.component';
import {SwiperModule} from "swiper/angular";
import { FavouriteItemsComponent } from './components/favourite-items/favourite-items.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ButtonListComponent,
    ShopListPageComponent,
    SubCategoriesComponent,
    CardItemComponent,
    SwitchColorToAmountDirective,
    SwitchColorToClickDirective,
    CardItemDetailsComponent,
    FavouriteItemsComponent,
  ],
  exports: [],
  imports: [
    SharedModule,
    MatListModule,
    ShopListRoutingModule,
    SwiperModule,

  ],
  providers: [
    HttpClient
  ]
})
export class ShopListModule { }
