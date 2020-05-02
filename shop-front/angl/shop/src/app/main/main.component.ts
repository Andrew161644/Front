
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../classes/Product';
import {ProductService} from '../services/product.service';
import {Topic} from '../classes/Topic';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  /* cards: Observable<Product[]>;*/

  topics: Observable<Topic[]>;
 cards: Product[] = [];
  /*topics: Topics[]=[];*/
  constructor(private prodService: ProductService,private router:Router) {

  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.cards[i] = new Product('Product', 2000,i);
    }

    /*this.prodService.findAll().subscribe(
      data => {
        this.cards=data;
      }
    );*/


  }
  public cardRedirect(id:number){
    console.log("Redirect");
    this.router.navigate(['details', id]);
  }
}
