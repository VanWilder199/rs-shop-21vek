import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationPopUpComponent} from "./header/components/pop-up/location-pop-up/location-pop-up.component";
import {DefaultMainPageComponent} from "./default/default-main-page/default-main-page.component";
import {CardItemDetailsComponent} from "./shop-list/components/card-item-details/card-item-details.component";
import {AuthComponent} from "./header/components/auth/auth.component";


const routes: Routes = [
  {path: '', component: DefaultMainPageComponent},
  {path: 'location', component: LocationPopUpComponent},
  {path: 'list', loadChildren: () => import('./shop-list/shop-list.module').then((m) => m.ShopListModule) },
  {path: 'auth', component: AuthComponent},
  {path: ':idItem', component: CardItemDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
