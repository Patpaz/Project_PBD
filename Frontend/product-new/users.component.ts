import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  productsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductService,
    private router: Router
  ) {
    this.productsForm = this.formBuilder.group({
      name: [''],
      stock: [''],
      price: [''],
      category: [''],
      description: ['']
    });
   }

  ngOnInit(): void {
  }

  addProduct(products : any) {
    this.productsService.insertProduct(products).subscribe(
      response => {
        console.log(products);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    )
  }
}