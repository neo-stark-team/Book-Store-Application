import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserModel} from '../model/user-model'

@Injectable({
  providedIn: 'root'
}) 
export class SignupServiceService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://zany-teal-harp-seal-cap.cyclic.app/signup';
  }

  public save(user: UserModel) {
    return this.http.post<UserModel>(this.apiUrl, user);
  }
}
