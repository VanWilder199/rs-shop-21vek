import { Component, OnInit } from '@angular/core';
import { Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {AppStateService} from "../../../core/services/app-state.service";
import {IImageUrls, IShopItemModel} from "../../../shared/models/shop-item.model";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value = '';
  modelChanged: Subject<string> = new Subject<string>();
  data!: IShopItemModel[];
  imageUrl!: IImageUrls[];

  constructor(private appState: AppStateService) {
  }
  ngOnInit() {
    this.modelChanged
      .pipe(
        debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        if(value.length > 2) {
          this.appState.getItemToSearch(value).subscribe((data) => {
            this.data = data
          })
        }
      })
  }
  changed(text: string) {
    this.modelChanged.next(text);
  }
  change() {
    this.value = '';
    this.data = []
  }




}
