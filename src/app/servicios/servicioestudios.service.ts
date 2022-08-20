import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelos/Estudios';

@Injectable({
  providedIn: 'root'
})
export class ServicioestudiosService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  verEstudios(): Observable<Estudios[]>{

    return this.http.get<Estudios[]>(`${this.URL}/estudio/ver/todos`);
  }

}
