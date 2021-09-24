import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../../../core/services/location.service";

@Component({
  selector: 'app-location-pop-up',
  templateUrl: './location-pop-up.component.html',
  styleUrls: ['./location-pop-up.component.scss']
})
export class LocationPopUpComponent implements OnInit {
  data: string = ''
  constructor(private location: LocationService) { }

  ngOnInit(): void {
    this.location.getCurrentIpLocation().subscribe(data => {
        this.data = data.city
      }
    )
  }

}
