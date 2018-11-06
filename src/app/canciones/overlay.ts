import { Injectable } from "@angular/core";





@Injectable()
export class Overlay {

  public IsVisible: boolean = false;
  public cancnionActual: string;
  
    constructor(){

    }


  public Toggle(): void {
    this.IsVisible = !this.IsVisible;
  }
}