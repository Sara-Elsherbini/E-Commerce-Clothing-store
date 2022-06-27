import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient:HttpClient ) { }

  createNewCart(model:any):Observable<any>
  {
   return this._HttpClient.post(environment.baseApi+"carts",model)
  
  }
}
