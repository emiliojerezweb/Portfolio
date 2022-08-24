import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/Experiencia'


@Injectable({
  providedIn: 'root'
})
export class ServicioexperienciaService {


  constructor(private http: HttpClient) { }

}
