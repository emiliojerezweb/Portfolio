import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelos/Habilidades';
import { ServiciohabilidadService } from 'src/app/servicios/serviciohabilidad.service';

@Component({
  selector: 'app-editarhabilidad',
  templateUrl: './editarhabilidad.component.html',
  styleUrls: ['./editarhabilidad.component.css']
})
export class EditarhabilidadComponent implements OnInit {

  nuevaHabilidad = new Habilidades();
  constructor(private router: Router, private servicioHabilidad: ServiciohabilidadService) { }

  ngOnInit(): void {
    this.edicionHabilidad();
  }

  edicionHabilidad(){
    let id = localStorage.getItem("id");
    this.servicioHabilidad.verHabilidadporId(+id).subscribe(data =>{
        this.nuevaHabilidad = data;
    })
  }
  guardarHabilidad(habilidad: Habilidades){
    this.servicioHabilidad.editarHabilidad(habilidad).subscribe( data =>
      {
        this.nuevaHabilidad = data;
        this.router.navigate(["/curso"]);
      })
  }
}