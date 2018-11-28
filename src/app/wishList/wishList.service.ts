import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { WishList } from './wishList';
import { WishListDetail} from './wishList-detail';
const API_URL = 'http://localhost:8080/s3_tiendadiscos-api/api/usuarios/';

@Injectable()
export class WishListService {

  constructor(private http: HttpClient) {}
  postWishList(wishList:WishList, usuarioId:number): Observable<WishList>{
    return this.http.post<WishList>(API_URL+`${usuarioId}/wishlist`, wishList);
  }
  getWishList(): Observable<WishList[]> {
    return this.http.get<WishList[]>(API_URL);
    }

  getWishListlDetail(wishListId): Observable<WishListDetail> {
    return this.http.get<WishListDetail>(API_URL + '/' + wishListId);
  }
}
