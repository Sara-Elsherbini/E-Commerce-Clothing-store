import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
   return this._HttpClient.get(environment.baseApi+'products')

  }
  getAllCategories():Observable<any>
  {
    return this._HttpClient.get(environment.baseApi+'products/categories')
  }
  getProductsByCategory(category:any)
  {
    return this._HttpClient.get(environment.baseApi+'products/category/'+category)
  }
  getProductById(id:any):Observable<any>
  {
    return this._HttpClient.get(environment.baseApi+'products/'+id)
  }
}
