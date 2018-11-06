import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {WishListService} from '../wishList.service';
import {WishList} from '../wishList';

@Component({
    selector: 'app-wishList-create',
    templateUrl: './wishList-create.component.html',
    styleUrls: ['./wishList-create.component.css'],
})
export class WishListCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private wishListService: WishListService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new author
    */
    wishList: WishList;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an author
    */
    createWishList(): WishList {

        this.wishListService.creatWishList(this.wishList)
            .subscribe((wishList) => {
                this.wishList = wishList;
                this.wishList.costoTotal = 0;
                this.create.emit();
                this.toastrService.success('Se creo la wishList', 'Funciono');

            });
        return this.wishList;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.wishList = new WishList();
    }
}
