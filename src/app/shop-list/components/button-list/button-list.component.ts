import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AppStateService} from "../../../core/services/app-state.service";


@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit{
  @Output() id = new EventEmitter<string>()
  @Input() data!: any[]
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

