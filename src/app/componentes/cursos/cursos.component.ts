import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelos/Habilidades';
import { ServicioexperienciaService } from 'src/app/servicios/servicioexperiencia.service';
import { ServiciohabilidadService } from 'src/app/servicios/serviciohabilidad.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  habilidad: Habilidades[];

  constructor(private servicioHabilidad: ServiciohabilidadService, private router: Router) {}

  ngOnInit(): void {
    this.verHabilidad();
  }

  private verHabilidad(){
    this.servicioHabilidad.verHabilidades().subscribe(dato =>{
      this.habilidad =dato;
    });
  }

  editarHabilidad(habilidad: Habilidades){
    localStorage.setItem("id", habilidad.id.toString());
    this.router.navigate(["/editarhabil"])
  
  }

  crearHabilidad(){
    this.router.navigate(["/crearhabil"]);
  }

  borrarHabilidad(habilidad: Habilidades){
    const ok = confirm('Desea eliminar la habilidad?');
    if(ok){
      this.servicioHabilidad.eliminarHabilidad(habilidad).subscribe( d =>{
          this.habilidad = this.habilidad.filter(e => e!==habilidad);
          alert('Se elimino la habilidad');
      });
    }
  }
}
