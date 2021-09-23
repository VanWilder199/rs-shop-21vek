import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../redux/state/app.state";
import {AppStateService} from "../../../core/services/app-state.service";
import {CategoryModel, ISubCategoryModel} from "../../../shared/models/category.model";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-shop-list-page',
  templateUrl: './shop-list-page.component.html',
  styleUrls: ['./shop-list-page.component.scss'],
})

export class ShopListPageComponent implements OnInit, OnDestroy {
   data!: CategoryModel[];
   sub!: ISubCategoryModel[];
   id: string = '';
   dataByID!: CategoryModel;

  private subID!: string | null;
  constructor(private store: Store<AppState>, private appState: AppStateService,
               private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.appState.getCategories()
    this.getAllCategories()
  }
  ngOnDestroy() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subID = params.get('id')
      console.log(this.subID)
    })
  }
  getAllCategories() {
    this.store.subscribe((dat) => {
      dat.allCategories.map((el) => {
        this.data = el.categories
      })
    })
  }
  onChangeId(id:string):string {
    this.getCategories(id)
    this.appState.onBehaviourID(id);
    return  this.id = id
  }
  getCategories(getId:string) {
    if(getId) {
      this.store.subscribe((data) => {
        data.allCategories.map((dataWrapper) => {
          dataWrapper.categories.find((sub) => {
            if(sub.id === getId) {
              this.dataByID = sub;
              this.sub = sub.subCategories

            }
          })
        })
      })
    }
  }

}
