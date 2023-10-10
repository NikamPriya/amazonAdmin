import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'cart-page',
        component: CartPageComponent
      },
      {
        path: 'orders-page',
        component: OrdersPageComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
