import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seleccion',
    pathMatch: 'full',
  },
  {
    path: 'login-maestro',
    loadChildren: () => import('./login-maestro/login-maestro.module').then((m) => m.LoginMaestroPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then((m) => m.VerifyEmailPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'seleccion',
    loadChildren: () => import('./seleccion/seleccion.module').then( m => m.SeleccionPageModule)
  },
  {
    path: 'admin-maestro',
    loadChildren: () => import('./admin-maestro/admin-maestro.module').then( m => m.AdminMaestroPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./admin/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./admin/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'maestros',
    loadChildren: () => import('./admin/maestros/maestros.module').then( m => m.MaestrosPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./admin-maestro/clases/maestros.module').then( m => m.MaestrosPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./admin/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./admin/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'calif',
    loadChildren: () => import('./admin-maestro/calif/calif.module').then( m => m.CalifPageModule)
  },

 








];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
