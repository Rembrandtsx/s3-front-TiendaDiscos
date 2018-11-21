import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WishListService } from './wishList.service';
import { WishListListComponent } from './wishList-list/wishList-list.component';
import { WishListDetailComponent} from './wishList-detail/wishList-detail.component';
import { ViniloModule} from '../vinilo/vinilo.module';
import {  ViniloListComponent} from './vinilo-list/vinilo-list.component'
import { from } from 'rxjs';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ViniloModule,
    ],
    declarations: [
        WishListListComponent, WishListDetailComponent, ViniloListComponent
    ],
    providers: [WishListService],
    exports: [WishListListComponent,  WishListDetailComponent, ViniloListComponent]
})
export class WishListModule { }
