import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './product-new/users.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    UsersComponent,
    ProductsDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
