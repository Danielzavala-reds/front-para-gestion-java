import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Registro } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  private baseUrl = 'http://localhost:8090/api'

  constructor(private http: HttpClient) { }

  addRegistro( registro: Registro ):Observable<Registro> {return this.http.post<Registro> (`${this.baseUrl}/nuevo-usuario`, registro) }
  
  deleteRegistro(id: number):Observable<any> {return this.http.delete<any> (`${this.baseUrl}/usuarios/${id}`) }
  
  getRegistros():Observable<Registro[]> { return this.http.get<Registro[]>(`${this.baseUrl}/usuarios`) };
 
  getRegistro( id: number ):Observable<Registro> { return this.http.get<Registro>(`${this.baseUrl}/usuarios/${id}`) }; 

  updateRegistro(registro: Registro ,id: number): Observable<Registro> { return this.http.put<Registro> (`${this.baseUrl}/editar-usuario/${id}`, registro) }

}
