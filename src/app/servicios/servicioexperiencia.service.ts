import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/Experiencia'


@Injectable({
  providedIn: 'root'
})
export class ServicioexperienciaService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080/exp';

  verExperiencias():Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.URL}/ver/todas`);
  }

  crearExperiencia(exp: Experiencia){
    return this.http.post<Experiencia>(`${this.URL}/crear`, exp);
  }
  
  verExperienciaporId(id:number){
    return this.http.get<Experiencia>(`${this.URL}/ver/`+ id);
  }
  editarExperiencia(exp:Experiencia){
    return this.http.put<Experiencia>(`${this.URL}/editar`, exp);
  }

  eliminarExperiencia(exp: Experiencia){
    return this.http.delete<Experiencia>(`${this.URL}/borrar/`+ exp.id);
  }

}
