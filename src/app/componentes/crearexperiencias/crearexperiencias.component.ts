import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ServicioexperienciaService } from 'src/app/servicios/servicioexperiencia.service';

@Component({
  selector: 'app-crearexperiencias',
  templateUrl: './crearexperiencias.component.html',
  styleUrls: ['./crearexperiencias.component.css']
})
export class CrearexperienciasComponent implements OnInit {

  nuevaExp: Experiencia = new Experiencia;
  constructor(private servicioExp: ServicioexperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarExp(){
    this.nuevaExp.imagen="Logotrabajo.png";
    this.servicioExp.crearExperiencia(this.nuevaExp).subscribe(data => {
      this.router.navigate(["/experiencia"]);
    });
  }

}
