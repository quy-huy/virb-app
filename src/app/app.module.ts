import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { OffsetWrapperComponent } from './components/layout/offset-wrapper/offset-wrapper.component';
import { HomeComponent } from './components/site/home/home.component';
import { ProductListComponent } from './components/site/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OffsetWrapperComponent,
    HomeComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent
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
