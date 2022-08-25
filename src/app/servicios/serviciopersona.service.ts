import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiciopersonaService {

  private URL = 'http://localhost:8080/persona';

  constructor(private http: HttpClient) { }
  
  //Se recibe info de la persona.
  verPersona():Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.URL}/todas`);
  }

  verPersonaporId(id:number){
    return this.http.get<Persona>(`${this.URL}/ver/`+ id);
  }
  editarPersona(persona: Persona){
    return this.http.put<Persona>(`${this.URL}/editar`, persona);
  }



  
}
