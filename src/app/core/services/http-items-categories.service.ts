import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getCategories, getItemsElectronics, getItemsFurniture} from "../../app.constants";
import {IGoods, IShopItemModel} from "../../shared/models/shop-item.model";
import {Observable} from "rxjs";
import {CategoryModel} from "../../shared/models/category.model";

@Injectable({
  providedIn: 'root'
})
export class HttpItemsCategoriesService {

  constructor(private http: HttpClient) { }

  getItemsCategoriesFurniture():Observable<IShopItemModel[]> {
    return this.http.get<IShopItemModel[]>(getItemsFurniture)
}
  getItemsCategoriesElectronics():Observable<IShopItemModel[]> {
    return this.http.get<IShopItemModel[]>(getItemsElectronics)
  }
  getCategories():Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(getCategories)
  }
  getCategoryIDSubID(categoryID:string, subCategoryId: string, number:number ):Observable<IShopItemModel[]> {
    const req = `http://localhost:3004/goods/category/${categoryID}/${subCategoryId}?start=${number}&count=10`
    return this.http.get<IShopItemModel[]>(req)
  }
  getCategoryItems(itemID:string):Observable<IShopItemModel> {
    const req = `http://localhost:3004/goods/item/${itemID}`
    return  this.http.get<IShopItemModel>(req)
  }
  getItemsToSearch(text:string): Observable<IShopItemModel[]> {
    const req = `http://localhost:3004/goods/search?text=${text}`;
    return this.http.get<IShopItemModel[]>(req);
  }

}
