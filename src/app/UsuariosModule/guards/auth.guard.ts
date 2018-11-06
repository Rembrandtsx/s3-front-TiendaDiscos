import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../../UsuariosModule/services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    if (this.auth.currentUser===null) {
      this.router.navigate(['/login']);
      return false;
    }
      
    return true;
  }
}