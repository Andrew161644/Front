
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../classes/Product';
import {ProductService} from '../services/product.service';
import {Topic} from '../classes/Topic';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  cards: Observable<Product[]>;

  topics: Observable<Topic[]>;
  /*cards: Product[] = [];*/
  /*topics: Topics[]=[];*/
  constructor(private prodService: ProductService) {

  }

  ngOnInit(): void {
    /*for (let i = 0; i < 10; i++) {
      this.cards[i] = new Product('Product', 2000);
    }*/
    /* this.imageSrc = 'data:image/jpeg;base64,' +  data['image'];*/
    this.prodService.findAll().subscribe(
      data => {
        this.cards=data;
      }
    );


  }
}
