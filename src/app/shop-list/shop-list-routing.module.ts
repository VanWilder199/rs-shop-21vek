import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopListPageComponent} from "./page/shop-list-page/shop-list-page.component";
import {CardItemComponent} from "./components/card-item/card-item.component";
import {CardItemDetailsComponent} from "./components/card-item-details/card-item-details.component";

const itemRouter: Routes = [
  {path: '', component: CardItemComponent},
  {path: ':idItem', component: CardItemDetailsComponent}
]

const routes: Routes = [
  {path: '', component: ShopListPageComponent },
  {path: ':id', children: itemRouter },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }
