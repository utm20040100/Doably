import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';


const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'maestro',
    loadChildren: () => import('./maestros/maestros.module').then( m => m.MaestrosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
