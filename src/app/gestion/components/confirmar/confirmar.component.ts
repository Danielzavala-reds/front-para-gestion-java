import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Registro } from '../../interfaces/usuario';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  registro!: Registro;

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
             @Inject(MAT_DIALOG_DATA) public data: Registro){}
  
  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cancelar(){
    this.dialogRef.close();
  }

}
