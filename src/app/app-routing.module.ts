import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/site/home/home.component';
import {ProductListComponent} from './components/site/product-list/product-list.component'
import { LoginComponent } from './components/site/login/login.component';
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'product', component:ProductListComponent },
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
