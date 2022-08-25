import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ServicioexperienciaService } from 'src/app/servicios/servicioexperiencia.service';

@Component({
  selector: 'app-creareditarexp',
  templateUrl: './creareditarexp.component.html',
  styleUrls: ['./creareditarexp.component.css']
})
export class CreareditarexpComponent implements OnInit {

  @Input() valor: number;
  frase: string;
  nuevaExp: Experiencia = new Experiencia();

  constructor(private servicioExp: ServicioexperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarLetrero();
  }

  GuardarExp(){
    this.nuevaExp.imagen="logotrabajo.png";
    this.servicioExp.crearExperiencia(this.nuevaExp).subscribe(data => {
      this.router.navigate(["/experiencia"]);
    });
  }

  cargarLetrero(){
    if(this.valor == 1){
      this.frase = "Editar experiencia";
    }
    else{
      this.frase = "Agregar experiencia";
    }
  }
}
