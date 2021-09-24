import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {IGoods, IShopItemModel} from "../../shared/models/shop-item.model";
import {CategoryModel, IWrapper} from "../../shared/models/category.model";

export const ItemsCategoriesSelectors = createFeatureSelector<AppState, IGoods>(
  'itemsCategories'
)
export const ItemsCategoriesPopularItems = createFeatureSelector<AppState, IGoods>(
  'itemsCategoriesPopularItems'
)
export const allCategories = createFeatureSelector<AppState, IWrapper>(
  'allCategories'
)
export const categoryByIdSubCategory = createFeatureSelector<AppState, IGoods>(
  'itemsSubCategory'
)

export const stateItems = createSelector(
  ItemsCategoriesSelectors,
  ItemsCategoriesPopularItems,
  allCategories,
  categoryByIdSubCategory,
  (items,ite, allCat, subCate) => [items, ite, allCat, subCate],
)

