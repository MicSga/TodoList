import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';

const productRouting: Routes = [
  {path: "product", redirectTo: "product/list", pathMatch: "full"},
  {path: "product/list", component: ListComponent},
  {path: "product/edit/:title", component: ProductComponent}
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
