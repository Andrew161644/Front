import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {CategoryService} from "../services/category.service";
import {Category} from "../classes/Category";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-products-by-categories',
  templateUrl: './products-by-categories.component.html',
  styleUrls: ['./products-by-categories.component.less']
})
export class ProductsByCategoriesComponent implements OnInit {
  category:Category;
  id:number;
  constructor(private route:ActivatedRoute, private router:Router,private prodService:ProductService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.category=new Category();


    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);
    console.log(this.id);
    this.category.id=this.id;
    this.categoryService.getCategoryById(this.id).subscribe(data=>{this.category=data;});
    // this.prodService.findAll().subscribe(
    //
    // );
  }

}
