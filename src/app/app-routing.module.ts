import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/site/home/home.component';
import {ProductListComponent} from './components/site/product-list/product-list.component'
import { LoginComponent } from './components/site/login/login.component';
import {ProductDetailComponent} from './components/site/product-detail/product-detail.component';
import {ContactComponent} from './components/site/contact/contact.component'
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'product', component:ProductListComponent },
  {path: 'login', component: LoginComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
