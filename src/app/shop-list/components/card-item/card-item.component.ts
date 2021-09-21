import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel, ISubCategoryModel} from "../../../shared/models/category.model";
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
  dataSubCategory!: IShopItemModel[];
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
  checkAmount():boolean {
    return this.dataSubCategory.length > 9
  }
  condition(data: number) {
   return (data > 0)
  }
  condition2(data: number) {
   return (data === 0)
  }

  changeStateFavorite(event: MouseEvent) {
    event.stopPropagation()
    const boolean = !false;
    console.log(event.target as Element)

    this.store.subscribe((data) => {
      data.itemsSubCategory.map((el) => {
       el.act.find((i) => {
         const id = (event.target as Element).id
         console.log(id)
         console.log(i)
         if(i.id === id) {
           console.log(i)
           i.isFavorite =  true
           console.log(i.isFavorite)
         } else {
           return
         }

       })
      })
    })
  }
}
