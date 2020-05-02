import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from './category.service';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';
import {Product} from '../classes/Product';

@Injectable({
  providedIn: 'root'
})
export class FindService {
  objects: Observable<any>;
  private url: string;

  constructor(private http: HttpClient) {
    this.url='http://localhost:8080/find'
  }

  ask(str: string) : Observable<any>{
    return this.http.get(`${this.url + '/header'}/{str}`);
  }
}
