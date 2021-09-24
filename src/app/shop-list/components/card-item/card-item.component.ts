import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Event} from "@angular/router";
import {IShopItemModel} from "../../../shared/models/shop-item.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../redux/state/app.state";
import {AppStateService} from "../../../core/services/app-state.service";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
   num = 0
  toggle = true;
  status = 'Enable';

  dataSubCategory!: IShopItemModel[];
  private isCheck: boolean = true;
  private isCheck2: boolean = true;
  constructor(public state: AppStateService,private route: ActivatedRoute, private store: Store<AppState>) { }
  ngOnInit(): void {
   this.getData()
    this.getSubCategories()

  }
  getSubCategories() {
    this.store.subscribe((data) => {
      data.itemsSubCategory.map((el) => {
        this.dataSubCategory = el.act
      })
    })
  }
  checkItem():boolean {
    return !!this.dataSubCategory
  }
  getData() {
    const {id} = this.route.snapshot.params
    this.state.behaviourId$.subscribe((idMain) => {
      if(id) {
        this.state.getCategorySubCategoryById(idMain, id, this.num)
      }
    })
    this.num += 10
    this.getSubCategories()
  }

  checkAmount(data: number):boolean {
    return data > 9
  }
  condition(data: number):boolean  {
   return (data > 0)
  }
  condition2(data: number):boolean  {
   return (data === 0)
  }

  changeStateFavorite(event: MouseEvent) {
    const elem = event.target as HTMLElement;
    if(this.isCheck2) {
      elem.classList.add('changeColorUnique');
      this.isCheck2 = false;
    } else  {
      elem.classList.remove('changeColorUnique')
      this.isCheck2 = true
    }
  }

  enableDisableRule(event:MouseEvent) {
    const elem = event.target as HTMLElement;
    if(this.isCheck) {
      elem.classList.add('changeColor');
      this.isCheck = false;
    } else  {
      elem.classList.remove('changeColor')
      this.isCheck = true
    }
  }


}
