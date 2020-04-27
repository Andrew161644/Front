/* tslint:disable */
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Product} from '../classes/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/categories';
  }

  getNew(): Observable<any> {
    return this.http.get(`${this.url + '/getNew'}`);
  }

  getRecomends(): Observable<any> {
    return this.http.get(`${this.url + '/getRecommends'}`);
  }

  getProdByCatId(id: number): Observable<any> {
    return this.http.get(`${this.url + '/getProdByType'}/${id}`);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.url + '/getAll'}`).pipe(map(data=>{
      let products=data["products"];
        return products.map(
          function(product:Product) {
              return {name: product.name, price:product.price , img:'data:image/jpeg;base64,' +  product['image']}
          }
        )
    }))
  }

  //not added at back
  getProductsByName(name: string): Observable<any> {
    return this.http.get(`${this.url + '/getProductByName'}/${name}`)
  }


}
