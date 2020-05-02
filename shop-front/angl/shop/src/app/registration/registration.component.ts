import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthecationService} from "../services/authecation.service";
import {RegistrationService} from "../services/registration-service";
import {Member} from "../classes/Member";
import {discardPeriodicTasks} from '@angular/core/testing';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  public member:Member;
  constructor(private router:Router,private registr:RegistrationService, private auth:AuthecationService) {

  }

  ngOnInit(): void {
    this.member=new Member();
  }
  reg(){
    this.registr.isUsed(this.member.username,this.member.password).subscribe(
      data=>{
        if (data){
          console.log("Username or Password used");
        }
        else {
          this.registr.isEmailUsed(this.member.email).subscribe(
            data=>{
              if (data){
                console.log("Email is used")
              }
              else {
                this.auth.authenticate(this.member.username,this.member.password).subscribe(
                  data=>{
                    console.log("auth");

                    this.router.navigate([''])
                  },

                )
              }
            }
          )
        }
      }
    )
  }

}
