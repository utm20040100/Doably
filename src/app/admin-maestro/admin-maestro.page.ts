import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-maestro',
  templateUrl: './admin-maestro.page.html',
  styleUrls: ['./admin-maestro.page.scss'],
})
export class AdminMaestroPage implements OnInit {

  uid: string = null

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

}
