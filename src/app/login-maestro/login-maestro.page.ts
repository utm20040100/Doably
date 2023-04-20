import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-maestro.page.html',
  styleUrls: ['./login-maestro.page.scss'],
})
export class LoginMaestroPage implements OnInit {
  constructor(private authSvc: AuthService, private router: Router) {}
 ngOnInit() {}
 
  async onLogin(email, password) {
    try {
      const master = await this.authSvc.login(email.value, password.value);
      if (master) {
        const isVerified = this.authSvc.isEmailVerified(master);
        console.log('verified->',isVerified);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['admin-maestro']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
