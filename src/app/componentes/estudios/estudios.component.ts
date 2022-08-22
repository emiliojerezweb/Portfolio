
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudioService } from 'src/app/servicios/servicioestudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudios[];
  constructor(private servicioEstudio: ServicioestudioService, private router: Router) { }

  ngOnInit(): void {
    this.verEstudios();
  }

  private verEstudios(){
    this.servicioEstudio.verEstudios().subscribe(data => {
      console.log(data);
      this.estudios = data;
    })
  }


}
