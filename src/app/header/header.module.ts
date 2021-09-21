import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {MainHeaderComponent} from "./pages/main-header/main-header.component";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared/shared.module";
import {RouterModule} from "@angular/router";
import { HeaderSecondRowComponent } from './components/header-second-row/header-second-row.component';
import {LocationComponent} from "./components/location/location.component";
import {CallHelpComponent} from "./components/call-help/call-help.component";
import {LocationPopUpComponent} from "./components/pop-up/location-pop-up/location-pop-up.component";
import {SearchComponent} from "./components/search/search.component";
import {AuthComponent} from "./components/auth/auth.component";

@NgModule({
  declarations: [
    HeaderComponent,
    MainHeaderComponent,
    HeaderSecondRowComponent,
    CallHelpComponent,
    LocationPopUpComponent,
    SearchComponent,
    AuthComponent,
    LocationComponent
  ],
  exports: [
    MainHeaderComponent,
  ],
  imports: [

    HttpClientModule,
    SharedModule,
    RouterModule,

  ]
})
export class HeaderModule { }
