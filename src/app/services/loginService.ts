import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) {}

  login(login: Login): Observable<Response<User>> {
    return this.http.post<Response<User>>(`${environment.apiUrl}/login`, login);
  }

  register(register: Register){
    return this.http.post(environment.apiUrl+"/register", register);
  }
  
}
