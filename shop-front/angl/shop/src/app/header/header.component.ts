import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthecationService} from "../services/authecation.service";
import {FindService} from '../services/find.service';
import {Product} from '../classes/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  ask: string;
  products: Product[] = [];
  constructor(private router:Router, private auth:AuthecationService, private findService:FindService) { }

  onStringChange(){}
  find() {
    this.products = [];
    this.findService.ask(this.ask).subscribe(data=>{
     // this.products=data;
    })
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.products[i] = new Product('Product', 2000);
    }
  }
  logOut(){
    this.auth.logOut();
  }
  redirectReg(){
    this.router.navigate(["registration"])
  }
  redirectLogIn(){
    this.router.navigate(["login"])
  }
}
