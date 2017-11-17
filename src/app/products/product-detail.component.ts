import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {IProducts} from './products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail ';
  product: IProducts;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    this.pageTitle += id;

    //hard coded for now, how can we fetch just the desired data. Since this is a routing view, and not nested, we cannot import. Is there a better way than to make another HTTP call using observables??
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      }
    };

    onBack() :void {
        this._router.navigate(['/products']);
    }    
  
}

 
