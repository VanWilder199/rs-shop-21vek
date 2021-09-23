import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ITokenResponseModel, IUserLoginModel} from "../../shared/models/auth.model";
import {IShopItemModel} from "../../shared/models/shop-item.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataLocalStorage$ = new Subject<IUserLoginModel | null>();

  data$: Observable<any>;
  private nameLocalStorage: string = 'auth';

  constructor() {
    this.data$ = this.dataLocalStorage$.asObservable();
  }

  setLocalStorage(username: string, password: string): void {
    const setItem = {
      login: username,
      password,
    };
    localStorage.setItem(this.nameLocalStorage, JSON.stringify(setItem));
    this.dataLocalStorage$.next(setItem);
  }

  isAuthenticated(): boolean {
    const localData = localStorage.getItem(this.nameLocalStorage);
    return !!localData;
  }

}
