import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {LocationService} from "../../../core/services/location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
 data: string = ''
  constructor(private location: LocationService) { }

  ngOnInit(): void {
   this.location.getCurrentIpLocation().subscribe(data => {
       this.data = data.city
   }
     )
  }
}
