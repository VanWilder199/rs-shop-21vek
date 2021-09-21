import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IShopItemModel} from "../../shared/models/shop-item.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {

  }
  getCurrentIpLocation(): Observable<any> {
    return this.http.get('http://ipinfo.io?token=73ff364fe37d29')
  }
}
