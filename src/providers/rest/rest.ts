import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import {Product} from "../../model/product";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getProducts():Observable<Product[]>{
    return this.http.get(this.baseUrl + "products")
      .map((response:Product[]) => {
        return response.map(product => {
          return new Product(product);
        })
      })
      .catch(err => {
        console.log(err);
        return Observable.empty<Product[]>();
      });
  }

  public createProduct(product: Product):Observable<Product>{
    return this.http.post(this.baseUrl + "products", product)
      .map(response => new Product(response))
      .catch(() => Observable.empty<Product>());
  }

  public updateProduct(product: Product):Observable<Product>{
    return this.http.put(this.baseUrl + "products/" + product.id, product)
      .map(response => new Product(response))
      .catch(() => Observable.empty<Product>());
  }

  public deleteProduct(productID: number):Observable<Object>{
    return this.http.delete(this.baseUrl + "products/" + productID)
      .catch(() => Observable.empty<Object>());
  }
}
