import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WishListService } from '../wishList.service';
import { WishList } from '../wishList';
import { WishListDetail } from '../wishList-detail';

@Component({
    selector: 'app-wishList-detail',
    templateUrl: './wishList-detail.component.html',
    styleUrls: ['./wishList-detail.component.css']
})
export class WishListDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param route The route element which helps to obtain the editorial's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private wishListService: WishListService,
    ) { }

    /**
    * The editorial whose details we want to show
    */
    wishListDetail: WishListDetail;



    /**
    * The editorial's id retrieved from the address
    */
    wishList_id: number;

    /**
    * The method which retrieves the books of an editorial
    */
    getWishListDetail(): void {
        this.wishListService.getWishListlDetail(this.wishList_id)
            .subscribe(wishListDetai => {
                this.wishListDetail = wishListDetai;
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
        this.wishList_id = 1;
        this.wishListDetail = new WishListDetail;
        this.getWishListDetail();
    }

}
