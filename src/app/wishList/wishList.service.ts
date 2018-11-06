import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { WishList } from './wishList';
import { WishListDetail} from './wishList-detail';


@Injectable()
export class WishListService {

  constructor(private http: HttpClient) {}

  getWishList(): Observable<WishList[]> {
    return this.http.get<WishList[]>('../../assets/wishList.json');
    }

  getWishListlDetail(wishListId): Observable<WishListDetail> {
    return this.http.get<WishListDetail>('../../assets/wishListDetail.json');
  }

  creatWishList(wishList): Observable<WishList> {
    return this.http.post<WishList>('../../assets/wishList.json', wishList);
  }
}
