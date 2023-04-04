import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  registro!: Usuario;

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
             @Inject(MAT_DIALOG_DATA) public data: Usuario){}
  
  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cancelar(){
    this.dialogRef.close();
  }

}
