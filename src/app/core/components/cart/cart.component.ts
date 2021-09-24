import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'Esmp', 'amount', 'delivery', 'count'];
  dataSource = {};
  constructor() { }

  ngOnInit(): void {
  }

}
