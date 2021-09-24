import {IShopItemModel} from "./shop-item.model";

export interface IWrapper {
  categories: CategoryModel[]
}
export interface CategoryModel {
  id: string,
  name: string,
  urlSvg: string
  subCategories: ISubCategoryModel[]
}
export interface ISubCategoryModel {
  id: string,
  name:string
}

export interface IData  {
  [key: string]: IWrapper[]
}
