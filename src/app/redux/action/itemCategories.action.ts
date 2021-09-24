import {createAction, props} from "@ngrx/store";
import {IGoods, IShopItemModel} from "../../shared/models/shop-item.model";
import {CategoryModel, IWrapper} from "../../shared/models/category.model";
import {categoryByIdSubCategoryReducer} from "../reducers/itemsCategories.reducer";

export const createItemsCategories = createAction(
  'create items to Slider',
  props<IGoods>(),
)
export const createItemsCategoriesPopularItems = createAction(
  'create items to Popular Items',
  props<IGoods>(),
)
export const createAllCategories = createAction(
  'create list categories',
  props<IWrapper>(),
)
export const createcategoryByIdSubCategoryReducer = createAction(
  'create categoryByIdSubCategoryReducer',
  props<IGoods>(),
)

