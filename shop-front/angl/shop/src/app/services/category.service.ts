import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/categories';
  }

  getMainCategories(): Observable<any> {
    return this.http.get(`${this.url + '/getMainCategories'}`);
  }
  getChildrenCategoriesById(id: number): Observable<any> {
    return this.http.get(`${this.url + '/getChildrenCategoriesById'}/${id}`);
  }
  getCategoryById(id: number):Observable<any>{
    return this.http.get(`${this.url + '/getCategoryById'}/${id}`);
  }

}

