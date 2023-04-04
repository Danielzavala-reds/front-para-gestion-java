import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    HomeComponent,
    InicioComponent,
    NuevoRegistroComponent,
    ConfirmarComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class GestionModule { }
