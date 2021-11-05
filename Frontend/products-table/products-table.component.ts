import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  products: any[] = []

  constructor(
    private productService : ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
    })
  }

  navigateToDelete(product_id: any){
    this.router.navigate(['/product/delete', product_id]);
  }

}
