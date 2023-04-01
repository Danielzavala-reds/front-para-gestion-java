import { Component, OnInit } from '@angular/core';

import { GestionService } from '../../services/gestion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.scss']
})
export class NuevoRegistroComponent implements OnInit {

  registro!: Usuario;
  usuarioId!: number;


  // Form reactive
  miFormulario: FormGroup = this.fb.group({
    nombre: ['Prueba nombre', [Validators.required, Validators.minLength(3)],],
    apellido: ['Prueba apellido', [Validators.required, Validators.minLength(3)],],
    email: ['test@test.com', [Validators.required, Validators.email],],
    telefono: ['12345678910', [Validators.required, Validators.minLength(10)]],
    password: ['',],
    id: ['']
  })

  constructor(private fb: FormBuilder,
    private gestionService: GestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    if(!this.router.url.includes(`inicio/editar`)  ){
      return;
    }

    this.extractId();

  }


  camposValidos(campo: string) {
    return this.miFormulario.controls[campo].errors
        && this.miFormulario.controls[campo].touched;
  }


  guardar() {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    };

    if(this.usuarioId){
      this.gestionService.updateUsuario(this.miFormulario.value, this.usuarioId)
        .subscribe( res => {
          console.log('Usuario actualizado: ', res)
        } )
    } else{
      this.gestionService.addUsuario(this.miFormulario.value)
        .subscribe ( res => {
          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Registro guardado con exito',
          })
          console.log(res);
          this.miFormulario.reset();
        });
     }
 }

  borrar() {
    this.gestionService.deleteUsuario(this.usuarioId)
      .subscribe( usuario => {
        console.log('Registro borrado', usuario);
        this.router.navigate(['/inicio/usuarios'])
      })
  }


  private extractId(){
   
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.gestionService.getUsuario(id)),
      )
      .subscribe( usuario => {
        this.usuarioId = usuario.id!;
        this.miFormulario.patchValue(usuario);
        console.log('Editando cliente', usuario)
      } )
  }

}
