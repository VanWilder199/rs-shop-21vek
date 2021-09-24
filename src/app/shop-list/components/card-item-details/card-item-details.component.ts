import { ViewEncapsulation, Component, OnInit } from '@angular/core';



import {AppStateService} from "../../../core/services/app-state.service";
import {ActivatedRoute} from "@angular/router";
import { IImageUrls} from "../../../shared/models/shop-item.model";
import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectFlip, Pagination, Navigation]);
@Component({
  selector: 'app-card-item-details',
  templateUrl: './card-item-details.component.html',
  styleUrls: ['./card-item-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardItemDetailsComponent implements OnInit {

   dataImg!: IImageUrls[];
  private isCheck: boolean = true;
  private isCheck2: boolean = true;
   dataPrice: number = 0;
   dataName: string = '';
   dataRating: number = 0;
   dataDescription: string = '';
  constructor(public state: AppStateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const {idItem} = this.route.snapshot.params;
    this.state.getItemtoID(idItem).subscribe((data) => {
      this.dataImg = data.imageUrls
      this.dataName = data.name
      this.dataPrice = data.price
      this.dataRating = data.rating
      this.dataDescription = data.description
    })
  }
  changeStateFavorite(event: MouseEvent) {
    const elem = event.target as HTMLElement;
    if(this.isCheck2) {
      elem.classList.add('changeColorUnique');
      this.isCheck2 = false;
    } else  {
      elem.classList.remove('changeColorUnique')
      this.isCheck2 = true
    }
  }

  enableDisableRule(event:MouseEvent) {
    const elem = event.target as HTMLElement;
    if(this.isCheck) {
      elem.classList.add('changeColor');
      this.isCheck = false;
    } else  {
      elem.classList.remove('changeColor')
      this.isCheck = true
    }
  }

}
