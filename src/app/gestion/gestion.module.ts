import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    HomeComponent,
    UsuarioComponent,
    InicioComponent,
    NuevoRegistroComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class GestionModule { }
