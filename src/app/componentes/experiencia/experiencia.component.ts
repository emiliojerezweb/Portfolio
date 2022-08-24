import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
<<<<<<< HEAD
  experiencias : Experiencia[];
  constructor() { }

  ngOnInit(): void {

  }
=======
  
  constructor(private serviexp : ServicioexperienciaService) { }

  ngOnInit(): void {
   
  }

>>>>>>> 1aecd8e640803ef3ace47dc3a1ef68b3becccf4d

}
