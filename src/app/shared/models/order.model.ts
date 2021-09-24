export interface IUserOrderRequestModel {
  items: IOrderItemModel,
  details: IDetailsItemModel
}
export interface IUserInfo {
  firstName: string,
  lastName: string,
  cart: string[],
  favorites: string[],
  orders: IUserOrder[]
}
export interface IUserOrder {
  items: IOrderItemModel,
  details: IDetailsItemModel,
  id: string
}
export interface IOrderItemModel {
  id: string,
  amount: number
}

export interface IDetailsItemModel {
  name: string,
  address: string,
  phone: string,
  timeToDeliver: string,
  comment: string
}

