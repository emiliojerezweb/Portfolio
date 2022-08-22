import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudioService } from 'src/app/servicios/servicioestudio.service';

@Component({
  selector: 'app-crearestudio',
  templateUrl: './crearestudio.component.html',
  styleUrls: ['./crearestudio.component.css']
})
export class CrearestudioComponent implements OnInit {

  nuevoestudio: Estudios = new Estudios;
  constructor(private router: Router, private servicioEstudio: ServicioestudioService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.servicioEstudio.crearEstudio(this.nuevoestudio).subscribe(data =>
      {
        this.router.navigate(["/"]);
      })
  }

}
