import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudiosService } from 'src/app/servicios/servicioestudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios : Estudios[];
  constructor(private serviEstudio: ServicioestudiosService) { }

  ngOnInit(): void {
    this.obtenerEstudios();
  }

  obtenerEstudios(){
    this.serviEstudio.verEstudios().subscribe(data =>
      { 
        this.estudios = data;
        console.log(data); 
      })
  }
}
