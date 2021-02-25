import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {TeamComponent} from "./team/team.component";
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  {path:"", redirectTo:"products"},
  {path:"products",component:ProductsComponent},
  {path:"team", component:TeamComponent},
  {path:"shop",component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
