import {IGoods} from "../../shared/models/shop-item.model";
import {createReducer, on} from "@ngrx/store";
import {
  createAllCategories, createcategoryByIdSubCategoryReducer,
  createItemsCategories,
  createItemsCategoriesPopularItems
} from "../action/itemCategories.action";
import { IWrapper} from "../../shared/models/category.model";


const initState: IGoods[] = [];
const initStateCategories: IWrapper[] = []

export const itemsCategoriesReducer = createReducer(
  initState,
  on(createItemsCategories, (state, payload) => [...state, payload]),
)
export const itemsCategoriesReducerPopularItems = createReducer(
  initState,
  on(createItemsCategoriesPopularItems, (state, payload) => [...state, payload]),
)

export const allCategoriesReducer = createReducer(
  initStateCategories,
  on(createAllCategories, (state, payload) => [...state, payload]),
)
export const categoryByIdSubCategoryReducer = createReducer(
  initState,
  on(createcategoryByIdSubCategoryReducer, (state, payload) => [...state, payload]),
)
