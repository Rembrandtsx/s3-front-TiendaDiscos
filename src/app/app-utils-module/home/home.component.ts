import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private login:LoginService) {}

  ngOnInit() {
    this.message = 'Hello';
  }
  local(){
    
  }
}
