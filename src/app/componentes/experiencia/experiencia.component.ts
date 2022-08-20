import { Component, OnInit } from '@angular/core';
import { ServicioexperienciaService } from 'src/app/servicios/servicioexperiencia.service';
import { Experiencia } from 'src/app/modelos/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  
  constructor(private serviexp : ServicioexperienciaService) { }

  ngOnInit(): void {
   
  }


}
