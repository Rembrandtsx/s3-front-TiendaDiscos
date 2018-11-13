import { Injectable } from "@angular/core";





@Injectable()
export class OverlayMusic {

  public IsVisible: boolean = false;
  public cancnionActual: string;
  
    constructor(){

    }


    public Toggle(): void {
    console.log("inyectado");
    this.IsVisible = !this.IsVisible;
  }
}