import { Component, ViewEncapsulation, OnInit } from "@angular/core";

import SwiperCore, { Pagination } from "swiper";
import {Store} from "@ngrx/store";
import {AppState} from "../../../redux/state/app.state";
import {AppStateService} from "../../services/app-state.service";
import {IShopItemModel} from "../../../shared/models/shop-item.model";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopularItemsComponent implements OnInit {
   data!: IShopItemModel[];


  constructor(private store: Store<AppState>, private appState: AppStateService) { }

  ngOnInit(): void {
    this.appState.getDataToPopularItems()
    this.getAllItemsCategoriesSubscribe()
  }
  getAllItemsCategoriesSubscribe() {
     this.store.subscribe((dat) => {
      dat.itemsCategoriesPopularItems.map((el) => {
        this.data = el.act
      })
    })
  }

}
