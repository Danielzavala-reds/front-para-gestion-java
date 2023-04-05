import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './gestion/pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', loadChildren: () => import ('./gestion/gestion.module').then (m => m.GestionModule)},
  {path: 'auth', loadChildren: () => import ('./auth/auth.module').then (m => m.AuthModule)},
  
  {path: '**', redirectTo: 'inicio'},
  {path: '**', redirectTo: 'auth'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
