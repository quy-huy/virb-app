import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { ProductListComponent } from './components/site/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './components/site/product-detail/product-detail.component';
import { ContactComponent } from './components/site/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
