import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from './../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-maestro',
  templateUrl: './admin-maestro.page.html',
  styleUrls: ['./admin-maestro.page.scss'],
})
export class AdminMaestroPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) {}
  uid: string = null

  ngOnInit() {
  }

}
