import { Component } from '@angular/core';

import { GestionService } from '../../services/gestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  usuarios: Usuario[] = [];

  usuario!: Usuario;

  usuarioId!: number;
  
  constructor(private gestionSerive: GestionService,
              private activatedRoute: ActivatedRoute,
              private route: Router){}

  ngOnInit(): void {

   this.gestionSerive.getUsuarios()
    .subscribe(usuarios => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  };

  get hayRegistros():string {
      if(this.usuarios.length === 0){
       return `No hay registros`
      }

      return '';
  }

 
  }



