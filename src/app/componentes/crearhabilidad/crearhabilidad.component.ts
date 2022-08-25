import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelos/Habilidades';
import { ServiciohabilidadService } from 'src/app/servicios/serviciohabilidad.service';

@Component({
  selector: 'app-crearhabilidad',
  templateUrl: './crearhabilidad.component.html',
  styleUrls: ['./crearhabilidad.component.css']
})
export class CrearhabilidadComponent implements OnInit {

  nuevaHabilidad: Habilidades = new Habilidades;

  constructor(private servicioHabilidad: ServiciohabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarHabilidad(){
    this.servicioHabilidad.crearHabilidad(this.nuevaHabilidad).subscribe( dato => {
        this.router.navigate(["/curso"]);
    });
  }
}
