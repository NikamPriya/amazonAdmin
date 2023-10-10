import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryServService } from '../services/category-serv.service';
import { Category } from '../core/classes/category';
import { ICategoryList } from '../core/interfaces/ICategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
categoryList: ICategoryList[]=[];
categoryObj: Category  = new Category();

constructor( private categoryServ:CategoryServService){ }

ngOnInit(): void {
  this.loadCategory(); 

}

loadCategory(){
  this.categoryServ.getAllCategory().subscribe((res:any)=>{
    this.categoryList=res.data;
  })
}

saveCategory(){
  this.categoryServ.saveCategory(this.categoryObj).subscribe((response:any)=>{
    if (response.result){
      alert("Created New Category ")
      this.categoryList=response.data;

    } else {
      alert (response.message)
    }
  },
  error=>{
    alert(JSON.stringify(error.error))
  });
  
}
}
