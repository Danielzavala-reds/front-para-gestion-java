import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    HomeComponent,
    UsuarioComponent,
    InicioComponent,
    NuevoRegistroComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionModule { }
