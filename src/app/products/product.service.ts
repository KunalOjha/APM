import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProducts } from "./products";

@Injectable()
export class ProductService {

    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProducts[]> {
        return this._http.get<IProducts[]>(this._productUrl)
                    .do(data => console.log('observable', data))
                    .catch(this.handleError);
    };

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}