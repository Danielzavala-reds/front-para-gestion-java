import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'nuevo-registro', component: NuevoRegistroComponent},
        {path: 'editar/:id', component: NuevoRegistroComponent},
        {path: '**', redirectTo: ''}
      ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
