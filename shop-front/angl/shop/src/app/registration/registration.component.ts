import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthecationService} from "../services/authecation.service";
import {RegistrationService} from "../services/registration-service";
import {User} from "../classes/User";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  user:User;
  constructor(private router:Router,private regser:RegistrationService) {
    this.user=new User();
  }

  ngOnInit(): void {

  }
  isUsed(){
    this.regser.isUsed(this.user.name,this.user.password).subscribe(
      data=>{

        console.log(data);
        if(data){
          console.log("Used already");
        }
        else {
          this.regser.save(this.user);
        }
      }
    );
  }

}
