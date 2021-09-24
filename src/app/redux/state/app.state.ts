import {IGoods, IShopItemModel} from "../../shared/models/shop-item.model";
import {CategoryModel, IWrapper} from "../../shared/models/category.model";


export interface AppState {
  itemsCategories: IGoods[],
  itemsCategoriesPopularItems: IGoods[],
  allCategories: IWrapper[],
  itemsSubCategory: IGoods[],
}
