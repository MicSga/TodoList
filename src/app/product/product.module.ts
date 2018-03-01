import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import {ProductRoutingModule} from './product-routing.module';
import { StatePipe } from './pipes/state.pipe';
import {ProductFactoryservice} from "./product-factory.service";
import {DetailComponent} from "./components/detail/detail.component";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ListComponent,
    DetailComponent,
    StatePipe
  ],
  providers:[ProductFactoryservice]
})
export class ProductModule { }
