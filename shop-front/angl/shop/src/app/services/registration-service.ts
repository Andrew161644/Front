import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationUrl: string;
  constructor(private http: HttpClient) {
    this.registrationUrl = 'http://localhost:8080/registration';
  }
  isUsed(username: string, password: string): Observable<any> {
    return this.http.get(`${this.registrationUrl + '/getIsUsed'}/${username}/${password}`);
  }
  save(user: User) {
    return this.http.post<User>(this.registrationUrl, user).subscribe(data => {
      console.log(data);
      }
    );
  }


}
