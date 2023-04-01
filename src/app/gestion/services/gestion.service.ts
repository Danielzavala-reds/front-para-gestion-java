import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  private baseUrl = 'http://localhost:8090/api'

  constructor(private http: HttpClient) { }

  addUsuario( usuario: Usuario ):Observable<Usuario> {return this.http.post<Usuario> (`${this.baseUrl}/nuevo-usuario`, usuario) }
  
  deleteUsuario(id: number):Observable<any> {return this.http.delete<any> (`${this.baseUrl}/usuarios/${id}`) }
  
  getUsuarios():Observable<Usuario[]> { return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`) };
 
  getUsuario( id: number ):Observable<Usuario> { return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${id}`) }; 

  updateUsuario(usuario: Usuario ,id: number): Observable<Usuario> { return this.http.put<Usuario> (`${this.baseUrl}/editar-usuario/${id}`, usuario) }

}
