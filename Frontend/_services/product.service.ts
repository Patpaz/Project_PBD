import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  getProducts() {
    return this.http.get<any>('http://localhost:3000/project');
  }

  insertProduct(products:any){
    return this.http.post<any>('http://localhost:3000/project', products);
  }

  deleteProducts(product_id: any) {
    return this.http.delete<any>(`http://localhost:3000/project/${product_id}`);
  }
}
