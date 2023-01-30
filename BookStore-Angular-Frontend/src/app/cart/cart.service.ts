import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl : string;
  userId:any;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://zany-teal-harp-seal-cap.cyclic.app/cart/'; 
  }

  setid(data:any){
    this.userId = data;
    this.apiUrl = 'https://zany-teal-harp-seal-cap.cyclic.app/cart/'+this.userId;
    console.log(this.apiUrl);
  }

  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.apiUrl);
  }

  delete(id:String):Observable<String>{
    this.apiUrl = 'https://zany-teal-harp-seal-cap.cyclic.app/cart/delete';
    console.log(this.apiUrl);
    return this.http.post<String>(this.apiUrl,{"data":id});
  }

  placeOrder(cart:String):Observable<String>{
    this.apiUrl = 'https://zany-teal-harp-seal-cap.cyclic.app/saveOrder';
    return this.http.post<String>(this.apiUrl,{ "data": cart});
  }
}
