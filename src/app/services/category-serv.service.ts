import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryList } from '../core/interfaces/ICategory';
import { ReturnClass } from '../core/classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServService {

  constructor(private http:HttpClient) { }


  getAllCategory() :Observable <ICategoryList[] > {
    return this.http.get<ICategoryList[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllCategory");
  }

  saveCategory(categoryObj:any): Observable<ReturnClass>{
    return this.http.post<ReturnClass>("https://freeapi.miniprojectideas.com/api/amazon/CreateNewCategory", categoryObj);
  }



}
