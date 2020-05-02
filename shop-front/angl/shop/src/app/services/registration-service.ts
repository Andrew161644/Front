import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../classes/Member';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationUrl: string;
  private  saveurl:string;
  constructor(private http: HttpClient) {
    this.registrationUrl = 'http://localhost:8080/registration';

  }
  isUsed(username: string, password: string): Observable<any> {
    return this.http.get(`${this.registrationUrl + '/getIsUsed'}/${username}/${password}`);
  }
  isEmailUsed(email: string):Observable<any>{
    return this.http.get(`${this.registrationUrl + '/isEmailUsed'}/${email}`);
  }
  save(member:Member):Observable<any>{
    return this.http.post<Member>(this.registrationUrl, member)
  }


}
