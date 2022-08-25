import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelos/Habilidades';

@Injectable({
  providedIn: 'root'
})
export class ServiciohabilidadService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080/habilidad';

  verHabilidades():Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`${this.URL}/ver/todas`);
  }

  crearHabilidad(habilidad: Habilidades){
    return this.http.post<Habilidades>(`${this.URL}/crear`, habilidad);
  }
  
  verHabilidadporId(id:number){
    return this.http.get<Habilidades>(`${this.URL}/ver/`+ id);
  }
  editarHabilidad(habilidad: Habilidades){
    return this.http.put<Habilidades>(`${this.URL}/editar`, habilidad);
  }

  eliminarHabilidad(habilidad: Habilidades){
    return this.http.delete<Habilidades>(`${this.URL}/borrar/`+ habilidad.id);
  }
}
