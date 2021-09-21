import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopListPageComponent} from "./page/shop-list-page/shop-list-page.component";
import {CardItemComponent} from "./components/card-item/card-item.component";

const routes: Routes = [
  {path: '', component: ShopListPageComponent },
  {path: ':id', component: CardItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }
