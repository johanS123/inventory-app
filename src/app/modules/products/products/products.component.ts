import { Component } from '@angular/core';
import { ProductService } from 'src/app/Core/services/product.service';
import IProduct from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  listProducts: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.productService.get().subscribe((resp: IProduct[] | any) => {
      this.listProducts = resp;
    });
  }
}
