import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { ViniloService } from '../../vinilo/vinilo.service';
import { Vinilo } from '../../vinilo/vinilo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private login: LoginService, private vinilos: ViniloService) { }
  vinilosRetrieved: Vinilo[];
  vinilosRock: Vinilo[];
  vinilosPop: Vinilo[];
  vinilosUltimos: Vinilo[];

  categorias
  ngOnInit() {
    this.vinilos.getVinilos().subscribe(x => {
      this.vinilosRetrieved = x.sort((w: Vinilo, z: Vinilo) => {
        return w.id - z.id;
      });
      
      this.llenarCategorias()
    })

  }
  llenarCategorias() {
    this.vinilosRock = this.vinilosRetrieved.filter((x: Vinilo) => {
    
      return x.categoria.toLowerCase() === "rock"
    })
    this.vinilosPop = this.vinilosRetrieved.filter((x: Vinilo) => {
     
      return x.categoria.toLowerCase() === "pop"
    })
    
  }
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};
  slickInit(event){
    console.log(this.vinilosRock);
  }


}
