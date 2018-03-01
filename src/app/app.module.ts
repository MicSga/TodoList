import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import {HomeModule} from './home/home.module';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './product/components/list/list.component';

const routes: Routes = [{ path: "blop", component: ListComponent}];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
