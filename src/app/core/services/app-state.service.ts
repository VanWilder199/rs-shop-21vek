import { Injectable } from '@angular/core';
import {HttpItemsCategoriesService} from "./http-items-categories.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../redux/state/app.state";
import {IGoods, IShopItemModel} from "../../shared/models/shop-item.model";
import {
  createAllCategories, createcategoryByIdSubCategoryReducer,
  createItemsCategories,
  createItemsCategoriesPopularItems
} from "../../redux/action/itemCategories.action";
import {IWrapper} from "../../shared/models/category.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private behaviourId = new BehaviorSubject('');

  behaviourId$: Observable<string> = this.behaviourId.asObservable();

  private behaviourMainId = new BehaviorSubject('');

  behaviourMainId$: Observable<string> = this.behaviourMainId.asObservable();

  private behaviourSecondId = new BehaviorSubject('');

  behaviourSecondId$: Observable<string> = this.behaviourSecondId.asObservable();

  constructor(private httpItemsCategories: HttpItemsCategoriesService, private store: Store<AppState>) {

  }
  onBehaviourID(data:string):void {
    this.behaviourId.next(data);
  }
  onBehaviourMainId(data:string):void {
    this.behaviourMainId.next(data);
  }
  onBehaviourSecondId(data:string):void {
    this.behaviourSecondId.next(data);
  }

  getDataToSlider() {
    this.httpItemsCategories.getItemsCategoriesFurniture().subscribe((data)=> {
      const updateData: IGoods = {
             act: data
            }
            this.store.dispatch(createItemsCategories({
                 ...updateData
              })
            )
          })
  }
  getDataToPopularItems() {
    this.httpItemsCategories.getItemsCategoriesElectronics().subscribe((data)=> {
      const updateData: IGoods = {
        act: data
      }
      this.store.dispatch(createItemsCategoriesPopularItems({
          ...updateData
        })
      )
    })
  }
  getCategories() {
    this.httpItemsCategories.getCategories().subscribe((data) => {
      const updateData: IWrapper = {
        categories: data
      }
      this.store.dispatch(createAllCategories({
        ...updateData
      }))
    })
  }
  getCategorySubCategoryById(categoryID:string, subCategoryID:string, num: number) {
    this.httpItemsCategories.getCategoryIDSubID(categoryID, subCategoryID, num).subscribe((data) => {
      const updateData: IGoods = {
        act: data
      }
      this.store.dispatch(createcategoryByIdSubCategoryReducer({
          ...updateData
        })
      )
    })
  }
  getItemtoID(itemID:string): Observable<IShopItemModel> {
    return this.httpItemsCategories.getCategoryItems(itemID)
  }
  getItemToSearch(text: string): Observable<IShopItemModel[]> {
    return  this.httpItemsCategories.getItemsToSearch(text)
  }

}
