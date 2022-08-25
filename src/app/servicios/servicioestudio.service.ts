import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelos/Estudios';

@Injectable({
  providedIn: 'root'
})
export class ServicioestudioService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080/estudio';

  verEstudios():Observable<Estudios[]> {
    return this.http.get<Estudios[]>(`${this.URL}/ver/todos`);
  }

  crearEstudio(estudio: Estudios){
    return this.http.post<Estudios>(`${this.URL}/crear`, estudio);
  }
  
  verEstudioporId(id:number){
    return this.http.get<Estudios>(`${this.URL}/ver/`+ id);
  }
  editarEstudio(estudio:Estudios){
    return this.http.put<Estudios>(`${this.URL}/editar`, estudio);
  }

  eliminarEstudio(estudio: Estudios){
    return this.http.delete<Estudios>(`${this.URL}/borrar/`+ estudio.id);
  }

}
