import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productmodel } from 'src/app/model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://zany-teal-harp-seal-cap.cyclic.app/home';
  }

  public getProduct():Observable<Productmodel[]>{
      return this.http.get<Productmodel[]>(this.apiUrl);
  }
}
