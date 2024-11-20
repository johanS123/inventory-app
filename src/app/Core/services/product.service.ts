import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IProduct from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiurl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(`${this.apiurl}/products`);
  }

  create(body: IProduct) {
    return this.http.post(`${this.apiurl}/product`, body);
  }

  update(id: number, body: IProduct) {
    return this.http.put(`${this.apiurl}/product/${id}`, body);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiurl}/product/${id}`);
  }
}
