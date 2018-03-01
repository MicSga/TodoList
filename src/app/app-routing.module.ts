import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/components/home/home.component';
import {AppComponent} from './app.component';
import {ContactComponent} from './home/components/contact/contact.component';

const appRoutes: Routes = [
  // {path: "home", component: HomeComponent},
  // {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
