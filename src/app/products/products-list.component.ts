 import {Component, OnInit} from '@angular/core';
 import {IProducts} from './products';
 
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

    filteredProducts : IProducts [];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

     products: IProducts[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];

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
    };

    onRatingClicked(message:string): void {
        this.pageTitle = 'Selected Product List Rating: ' +  message;
    }

 }