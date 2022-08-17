import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/Experiencia'


@Injectable({
  providedIn: 'root'
})
export class ServicioexperienciaService {

  private URL = "http://localhost:8080/portfolio"

  constructor(private http: HttpClient) { }

  verExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.URL}`+ '/experiencia');
  }
}
