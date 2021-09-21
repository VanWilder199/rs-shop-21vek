export interface IGoods {
 act: IShopItemModel[],
}
export interface ISubCategory {
  [key: string]: IShopItemModel[]
}

export interface IShopItemModel {
  id: string,
  name: string,
  imageUrls: IImageUrls[],
  rating: number,
  availableAmount: number,
  price: number,
  description: string,
  isFavorite?: boolean,
  isInCart?: boolean,

}
interface IImageUrls {
  [key: number]: string
}
