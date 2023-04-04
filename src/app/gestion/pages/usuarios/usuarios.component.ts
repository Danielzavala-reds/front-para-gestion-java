import { Component } from '@angular/core';

import { GestionService } from '../../services/gestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  usuarios: Usuario[] = [];

  usuario!: Usuario;

  usuarioId!: number;
  
  constructor(private gestionService: GestionService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog){}

  ngOnInit(): void {
    this.obtenerRegistros();
  };

  get hayRegistros():string {
      if(this.usuarios.length === 0){
       return `No hay registros`
      }

      return '';
  }

  borrar(id: number){
   const dialog = this.dialog.open(ConfirmarComponent, {
      width: '300px',
      height: '200px',
      data: this.usuario
    });

    dialog.afterClosed()
      .subscribe ( (res) => {
        if(res){
           this.gestionService.deleteUsuario(id)
            .subscribe( registro => {
              Swal.fire({
                icon: 'error',
                title: 'Eliminado',
                text: 'Registro eliminado correctamente',
              })
              this.obtenerRegistros();
            })
         }
      })
    }

 private obtenerRegistros(){
  this.gestionService.getUsuarios()
  .subscribe (registros => {
    this.usuarios = registros;
  })
 }

  


}
