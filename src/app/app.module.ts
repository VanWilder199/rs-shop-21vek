import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {HeaderModule} from "./header/header.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  allCategoriesReducer, categoryByIdSubCategoryReducer,
  itemsCategoriesReducer,
  itemsCategoriesReducerPopularItems
} from "./redux/reducers/itemsCategories.reducer";
import {ShopListModule} from "./shop-list/shop-list.module";
import { DefaultMainPageComponent } from './default/default-main-page/default-main-page.component';
import {HeaderThirdRowComponent} from "./header/components/header-third-row/header-third-row.component";


@NgModule({
    declarations: [
        AppComponent,
        DefaultMainPageComponent,
        HeaderThirdRowComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        RouterModule,
        HeaderModule,
        StoreModule.forRoot({
            itemsCategories: itemsCategoriesReducer,
            itemsCategoriesPopularItems: itemsCategoriesReducerPopularItems,
            allCategories: allCategoriesReducer,
            itemsSubCategory: categoryByIdSubCategoryReducer,
        }, {}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
