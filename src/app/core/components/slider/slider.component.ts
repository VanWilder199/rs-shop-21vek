import {Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy} from "@angular/core";
import {SwiperComponent} from "swiper/angular";
import SwiperCore, {Autoplay, Pagination, Navigation} from "swiper";
import {HttpItemsCategoriesService} from "../../services/http-items-categories.service";
import {IGoods, IShopItemModel} from "../../../shared/models/shop-item.model";
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../redux/state/app.state";
import {AppStateService} from "../../services/app-state.service";
import {createItemsCategories} from "../../../redux/action/itemCategories.action";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit, OnDestroy {
    data: IShopItemModel[] = []
  private st!: Subscription;

  constructor(private store: Store<AppState>, private appState: AppStateService) {
  }
  ngOnInit(): void {
    this.appState.getDataToSlider()
    this.getAllItemsCategoriesSubscribe()

  }
  ngOnDestroy() {
    this.st.unsubscribe();
  }
  getAllItemsCategoriesSubscribe() {
    this.st = this.store.subscribe((dat) => {
      dat.itemsCategories.map((el) => {
         this.data = el.act
      })
    })
  }
}
