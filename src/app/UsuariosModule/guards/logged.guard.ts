import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    if (!(this.auth.currentUser===null)) {
      this.router.navigate(['/me']);
      return false;
    }
      
    return true;
  }
}