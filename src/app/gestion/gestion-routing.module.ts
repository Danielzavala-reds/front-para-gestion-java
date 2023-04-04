import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {path: 'principal', component: InicioComponent},
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'nuevo-registro', component: NuevoRegistroComponent},
        {path: 'editar/:id', component: NuevoRegistroComponent},
        {path: 'perfil', component: PerfilComponent},
        {path: '**', redirectTo: 'usuarios'}
      ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
