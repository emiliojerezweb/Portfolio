import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiciopersonaService {

  private URL = "http://localhost:8080/portfolio";

  constructor(private http: HttpClient) { }

  verPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}`);
  }

  
}
