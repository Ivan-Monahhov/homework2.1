import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {name:"Boots", price:300 , color:"Red"},
    {name:"Pants", price:100 , color:"Black"},
    {name:"Shirt", price:30 , color:"Red"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
