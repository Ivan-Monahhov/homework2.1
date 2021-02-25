import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {TeamComponent} from "./team/team.component";
import {ShopComponent} from "./shop/shop.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:"", redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductsComponent},
  {path:"team", component:TeamComponent},
  {path:"shop",component:ShopComponent},
  {path:"contact",component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
