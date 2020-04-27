import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthecationService} from "../services/authecation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;
  constructor(private router:Router,
              private logservice:AuthecationService) { }

  ngOnInit(): void {
  }
  checklogin(){
    this.logservice.authenticate(this.username,this.password).subscribe(
      data=>{
        this.invalidLogin=false;
        this.router.navigate([''])
      },
      error => this.invalidLogin=true
    )
  }
}
