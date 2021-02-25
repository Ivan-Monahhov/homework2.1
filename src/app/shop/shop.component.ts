import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shops = [
    {location:"Lasnamae 6",time:"9-17"},
    {location:"Magasini 6",time:"9-17"},
    {location:"Liivalaia 13",time:"9-17"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
