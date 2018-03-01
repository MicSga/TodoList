import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';

const homeRouting: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
