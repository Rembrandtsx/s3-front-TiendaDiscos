import { Injectable } from "@angular/core";





@Injectable()
export class Overlay {

  public IsVisible: boolean = false;
  public menuToogle: boolean = false;
  public cancnionActual: string;
  
    constructor(){

    }


    public Toggle(): void {
    console.log("inyectado");
    this.IsVisible = !this.IsVisible;
  }
    public toogleMenu():void{
      this.menuToogle = !this.menuToogle;
    }
}