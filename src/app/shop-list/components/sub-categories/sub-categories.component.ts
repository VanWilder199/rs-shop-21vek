import {Component, Input} from '@angular/core';
import {ISubCategoryModel} from "../../../shared/models/category.model";
import {AppStateService} from "../../../core/services/app-state.service";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {
  @Input() sub!: ISubCategoryModel[]
  @Input() dataByID!: ISubCategoryModel;
  constructor(private state: AppStateService) {
  }
  getID(event: Event ): void {
    let target = (event.target as HTMLElement).id;
    this.state.onBehaviourSecondId(target)
  }
}
