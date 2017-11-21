import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './products-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', 
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule{ }
