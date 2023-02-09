import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) {}
   ngOnInit() {}
   
  
  
    
  }
