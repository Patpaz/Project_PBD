import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { UsersComponent } from './product-new/users.component';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';



const routes : Routes = [
  { path: '', component: ProductsTableComponent },
  { path: 'product/new', component: UsersComponent },
  { path: 'product/delete/:product_id', component : ProductsDeleteComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
