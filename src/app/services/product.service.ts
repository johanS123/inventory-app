import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IProduct from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiurl = `http://localhost:8080/api`;

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
