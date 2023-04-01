import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../services/gestion.service';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs';
import { Usuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario!: Usuario;
  usuarioId!: string;
  
  constructor(private gestionService: GestionService,
              private activatedRoute: ActivatedRoute,
              private router: Router){};
    
    
    ngOnInit(): void {
      // this.activatedRoute.params
      //   .pipe(
      //     switchMap( ({id} ) => this.gestionService.getUsuario(id)), 
      //   )
      //   .subscribe( usuario => console.log('Usuario a eliminar', usuario) )
  }


  // borrar(){
  //   this.gestionService.deleteUsuario(this.usuarioId)
  //     .subscribe(usuarioD => console.log(usuarioD))
  // }

    

}
