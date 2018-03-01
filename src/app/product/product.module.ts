import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import {ProductRoutingModule} from './product-routing.module';
import { StatePipe } from './pipes/state.pipe';
import { DetailComponent } from './components/detail/detail.component';
import {ProductService} from './services/product.service';
import {MagasinService} from './services/magasin.service';
// import {ProductRepositoryService} from './services/product-repository.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ListComponent,
    StatePipe,
    DetailComponent,
  ],
  providers: [ProductService, MagasinService]
})
export class ProductModule { }
