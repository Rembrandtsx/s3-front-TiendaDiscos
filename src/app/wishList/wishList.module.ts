import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WishListService } from './wishList.service';
import { WishListListComponent } from './wishList-list/wishList-list.component';
import { WishListDetailComponent} from './wishList-detail/wishList-detail.component';
import { ComentarioModule} from '../comentario/comentario.module';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ComentarioModule,
    ],
    declarations: [
        WishListListComponent, WishListDetailComponent
    ],
    providers: [WishListService],
    exports: [WishListListComponent]
})
export class WishListModule { }
