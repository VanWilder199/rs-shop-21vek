import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable } from 'rxjs';
import {AppState} from "../../../redux/state/app.state";
import {CategoryModel, ISubCategoryModel, IWrapper} from "../../../shared/models/category.model";
import {AppStateService} from "../../../core/services/app-state.service";
import {map, switchMap, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-header-third-row',
  templateUrl: './header-third-row.component.html',
  styleUrls: ['./header-third-row.component.scss']
})
export class HeaderThirdRowComponent implements OnInit {
   private data!: Observable<IWrapper[]>;
   subCategories!: ISubCategoryModel[];
   main!: CategoryModel;



  constructor(private store: Store<AppState>, private appState: AppStateService) { }

  ngOnInit(): void {
    this.appState.getCategories()
    this.getDataCategory()
  }
  getDataCategory() {
    this.data = this.store.select((state => state.allCategories))
    this.data.subscribe((dataWrapper) => {
      dataWrapper.map((data) => {
        this.main = data.categories[0];
        this.subCategories = data.categories[0].subCategories

      })
    })
  }
  getID(event: Event): void {
    let target = (event.target as HTMLElement).id;
    this.appState.onBehaviourID(target)

  }


}
