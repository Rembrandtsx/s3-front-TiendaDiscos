import {Component} from '@angular/core';
import { SearchBarComponent } from '../../app-utils-module/searchbar/searchbar.component';
import { Overlay } from '../../canciones/overlay';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private overlay: Overlay){

  }
}
