import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import IProduct from '../../models/product';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.scss'],
})
export class InventaryComponent {
  listProducts: IProduct[] = [];
  constructor(private productService: ProductService) {}

  getProducts() {
    this.productService.get().subscribe(
      (resp: IProduct[] | any) => {
        this.listProducts = resp;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
