import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductList } from '../core/interfaces/IProduct';
import { ReturnClass } from '../core/classes/category';
import { Product } from '../core/classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<IProductList[]>{
    return this.http.get <IProductList[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts")
  }

  //editProduct(Id:number): Observable<IProductList[]>{
  //  return this.http.get<IProductList[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllProductsByCategoryId?id=" + Id)
  //}

  updateProduct(productObj:any): Observable<IProductList[]>{
    return this.http.post<IProductList[]>("https://freeapi.miniprojectideas.com/api/amazon/UpdateProduct", productObj)
  }

  createProduct(productObj:any): Observable<ReturnClass>{
    return this.http.post<ReturnClass>("https://freeapi.miniprojectideas.com/api/amazon/CreateProduct", productObj)
  }

  onDelete(Id:number): Observable<IProductList[]>{
    
    return this.http.get<IProductList[]>("https://freeapi.miniprojectideas.com/api/amazon/DeleteProductById?id=" + Id)
  }

}
