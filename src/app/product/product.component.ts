import { Component, OnInit } from '@angular/core';
import { IProductList } from '../core/interfaces/IProduct';
import { Product } from '../core/classes/product';
import { ProductServService } from '../services/product-serv.service';
import { HttpClient } from '@angular/common/http';
import { CategoryServService } from '../services/category-serv.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
productList: IProductList[]=[];
categoryList:any[]=[];
isCardView: boolean= true;

productObj: Product = new Product();

isShowCard=true;
showCard(){
  this.isShowCard=!this.isShowCard;
}

constructor(private categorySrv:CategoryServService , private productServ:ProductServService){ }

ngOnInit(): void {
  this.loadProducts();
  this.getallCategory();
  
}

getallCategory() {
  this.categorySrv.getAllCategory().subscribe((res:any)=>{
    this.categoryList = res.data;
  })
}

onEdit(item:any){
  this.productObj=item;
}

onUpdate(){
  this.productServ.updateProduct(this.productObj).subscribe((res:any)=>{
    if (res.result){
      alert ("Product updated successfully");
      this.loadProducts()
    } else {
      alert (res.message)
    }
  },
  error=>{
    alert (JSON.stringify(error.error) )
  })
}

loadProducts(){
  debugger;
  this.productServ.getAllProducts().subscribe((res:any)=>{
    this.productList=res.data;
  })
}

saveProduct(){
  this.productServ.createProduct(this.productObj).subscribe((result:any)=>{
    if (result.result){
      alert ("Created New Product")
      this.productList=result.data;
    } else {
      alert (result.message)
    }
  },
  error =>{
    alert(JSON.stringify(error.error))
  });  
}

onDelete(productId:number){
  const isConfirm= confirm(" Are you want to delete this product");
  if(isConfirm){
    this.productServ.onDelete(this.productObj.productId).subscribe((result:any)=>{
      if (result.result){
        alert("Product deleted successfully");
        this.loadProducts();
      } else {
        alert (result.message);
      }
    },
    error=>{
      alert (JSON.stringify(error.error))
    })
     
}
 
}


displayStyle = "none"; 
  
openPopup() { 
  this.displayStyle = "block"; 
} 
closePopup() { 
  this.displayStyle = "none"; 
} 
}




