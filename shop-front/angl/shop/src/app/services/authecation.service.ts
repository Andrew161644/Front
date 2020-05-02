import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {reflectTypeEntityToDeclaration} from "@angular/compiler-cli/src/ngtsc/reflection";
import {Member} from "../classes/Member";
@Injectable({
  providedIn: 'root'
})
export class AuthecationService {

  constructor(private httpClient: HttpClient) { }
  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get('http://localhost:8080/login/validateLogin', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }
  isUserLoggedIn(){
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
