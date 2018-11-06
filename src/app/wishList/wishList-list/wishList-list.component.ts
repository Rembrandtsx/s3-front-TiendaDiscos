import { Component, OnInit } from '@angular/core';
import {WishListService} from '../wishList.service';
import { WishList } from '../wishList';

@Component({
  selector: 'app-wishList-list',
  templateUrl: './wishList-list.component.html',
  styleUrls: ['./wishList-list.component.css']
})
export class WishListListComponent implements OnInit {

  constructor (private wishListService: WishListService) { }

  wishList: WishList[];

  getWishList (): void {
    this.wishListService.getWishList().subscribe(wishLists => this.wishList = wishLists);
  }

  ngOnInit() {
    this.getWishList();
  }

}
