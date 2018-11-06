import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WishListService } from './wishList.service';
import { WishListListComponent } from './wishList-list/wishList-list.component';
import { WishListDetailComponent} from './wishList-detail/wishList-detail.component';
import { ComentarioModule} from '../comentario/comentario.module';
import { WishListCreateComponent} from './wishList-create/wishList-create.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ComentarioModule,

    ],
    declarations: [
        WishListListComponent, WishListDetailComponent, WishListCreateComponent
    ],
    providers: [WishListService],
    exports: [WishListListComponent, WishListCreateComponent]
})
export class WishListModule { }
