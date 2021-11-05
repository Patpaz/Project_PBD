import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit {
  product_id : any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.product_id = data.get('product_id');
      }
    )
  }
  deleteProduct(product_id:any){
    this.productsService.deleteProducts(product_id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    )
  }
  goBack(){
    this.router.navigate(['/']);
  }

}
