import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationPopUpComponent} from "./header/components/pop-up/location-pop-up/location-pop-up.component";
import {DefaultMainPageComponent} from "./default/default-main-page/default-main-page.component";


const routes: Routes = [
  {path: '', component: DefaultMainPageComponent},
  {path: 'location', component: LocationPopUpComponent},
  {path: 'list', loadChildren: () => import('./shop-list/shop-list.module').then((m) => m.ShopListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
