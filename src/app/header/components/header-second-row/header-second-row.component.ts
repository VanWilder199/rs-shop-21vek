import { Component } from '@angular/core';

@Component({
  selector: 'app-header-second-row',
  templateUrl: './header-second-row.component.html',
  styleUrls: ['./header-second-row.component.scss']
})
export class HeaderSecondRowComponent   {
  isCheck:boolean = false;

  onClick(check: boolean) {
    if(check) {
      return this.isCheck = false
    } else  {
      return this.isCheck = true
    }
  }

}
