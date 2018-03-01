import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {DetailComponent} from './components/detail/detail.component';

const productRouting: Routes = [
  {path: "product", redirectTo: "product/list", pathMatch: "full"},
  {path: "product/list", component: ListComponent},
  {path: "product/edit/:CodeBar", component: ProductComponent},
  {path: "product/detail/:CodeBar", component: DetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRouting)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
