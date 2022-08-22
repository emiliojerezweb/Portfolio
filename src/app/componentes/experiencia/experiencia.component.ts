import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencias : Experiencia[];
  constructor() { }

  ngOnInit(): void {

  }

}
