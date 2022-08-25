import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ServicioexperienciaService } from 'src/app/servicios/servicioexperiencia.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit {

  nuevaExp = new Experiencia();
  constructor(private servicioexp : ServicioexperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.edicionExp();
  }

  edicionExp(){
    let id = localStorage.getItem("id");
    this.servicioexp.verExperienciaporId(+id).subscribe(dato =>{
        this.nuevaExp=dato;
    });
  }

  guardarExp(exp: Experiencia){
    this.servicioexp.editarExperiencia(exp).subscribe( dato =>
      {
        this.nuevaExp= dato;
        this.router.navigate(["/experiencia"]);
      })
  }
}
