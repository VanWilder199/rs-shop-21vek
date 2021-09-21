import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IShopItemModel, ISubCategory} from "../../../shared/models/shop-item.model";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../redux/state/app.state";
import {AppStateService} from "../../../core/services/app-state.service";
import {CategoryModel, ISubCategoryModel, IWrapper} from "../../../shared/models/category.model";
import {ActivatedRoute, Params, RouterLink, RouterLinkActive} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit{
  @Output() id = new EventEmitter<string>()
  @Input() data!: any[]

  // @Input() urlSvg!: string[]
  constructor(private state: AppStateService) {
  }
  ngOnInit() {


  }

  getID(event: Event, name:string): void {
    let target = (event.target as HTMLElement).id;
      this.state.onBehaviourMainId(name)

    this.id.emit(target)
  }

}

