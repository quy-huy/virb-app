import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/site/home/home.component';
import {ProductListComponent} from './components/site/product-list/product-list.component'
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'product', component:ProductListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
