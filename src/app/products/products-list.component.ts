import { Component, OnInit } from '@angular/core';

import { IProducts } from './products';
import { ProductService } from './product.service';
 
 @Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
 })
 
 export class ProductListComponent implements OnInit {
     pageTitle: string = 'Product List';
     imageWidth: number = 50;
     imageMargin: number = 2;
     showImage: boolean = false;
     products: IProducts[];
     filteredProducts : IProducts [];
     errorMessage: string;
     

     //change the listFilter property into a getter and setter like so:
     //https://stackoverflow.com/questions/45167199/why-are-underscores-added-to-fields-of-a-typescript-class-in-angular4
     _listFilter: string;

     //when the databinding needs the value, it will call the getter and get the value
     get listFilter(): string {
         return this._listFilter;
     }
     //everytime the user modifies the value, the data bainding calls the setter, passing in the changed value
     set listFilter(value: string) {
         this._listFilter = value;
         this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
     }

    constructor(private _productService : ProductService) {
    }

    performFilter(filterBy: string) :IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        //The filter() method creates an array filled with all array elements that pass a test (provided as a function). The first value is the value of the current element
        return this.products.filter((product: IProducts) =>
        // The indexOf() method returns the position of the first occurrence of a specified value in a string.This method returns -1 if the value to search for never occurs. The indexOf() method is case sensitive. 
        // For each product list, the name is converted into lowercase, and the indexOf checks the array to see if the filterBy parameter (text) matches the product name/element item.
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        console.log('onInit was called');
        //assigns list of products to local variable (products) from the ProductsService
        this._productService
            .getProducts()
            .subscribe(products=> {
                            this.products = products;
                            this.filteredProducts = this.products;
                                },
                        error => this.errorMessage = <any>error);
    };

    onRatingClicked(message:string): void {
        this.pageTitle = 'Selected Product List Rating: ' +  message;
    }

 }