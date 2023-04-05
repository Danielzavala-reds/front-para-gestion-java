import { Component } from '@angular/core';

import { GestionService } from '../../services/gestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from '../../interfaces/usuario';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  registros: Registro[] = [];

  registro!: Registro;
  
  constructor(private gestionService: GestionService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog){}

  ngOnInit(): void {
    this.obtenerRegistros();
  };

  get hayRegistros():string {
      if(this.registros.length === 0){
       return `No hay registros`
      }

      return '';
  }

  borrar(id: number){
   const dialog = this.dialog.open(ConfirmarComponent, {
      width: '300px',
      height: '200px',
      data: this.registro
    });

    dialog.afterClosed()
      .subscribe ( (res) => {
        if(res){
           this.gestionService.deleteRegistro(id)
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
  this.gestionService.getRegistros()
  .subscribe (registros => {
    this.registros = registros;
  })
 }

  


}
