import { Component, OnInit } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {Product} from '../classes/Product';
import {timeSinceInMicros} from '@angular/compiler-cli/src/ngtsc/perf/src/clock';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.less']
})
export class CardProductComponent implements OnInit {
  public id: number;
  public product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(
        data => this.id = +data
      );
    this.productService.getProductbyId(this.id).subscribe(
      data=>{
        console.log(data['id']);
        let name=data['name'];
        let price= data['price'];
        this.product=new Product(name,price,this.id)
      }
    )
  }

}
