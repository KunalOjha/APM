import {Component, OnChanges, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;

    //create an event property
    @Output() ratingClicked : EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void  {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        //use the event property 'ratingClicked' and call its 'emit' method to raise the event to the parent container
        //The emit method raises the event
        this.ratingClicked.emit(`${this.rating}`);
    }
}
