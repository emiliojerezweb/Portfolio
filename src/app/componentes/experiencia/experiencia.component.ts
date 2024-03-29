import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ServicioexperienciaService } from 'src/app/servicios/servicioexperiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencias : Experiencia[];
  numero: number;
  
  constructor(private serviciosexp: ServicioexperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.verExperiencias();
  }

  private verExperiencias(){
    this.serviciosexp.verExperiencias().subscribe(data => {
      this.experiencias = data;
    })
  }
  
  editarExp(exp: Experiencia){
    localStorage.setItem("id", exp.id.toString());
    this.router.navigate(["/editarexp"]);
  }

  crearExp(){
    this.router.navigate(["/crearexp"]);
  }

  borrarExp(exp:Experiencia){
    const ok = confirm('Desea eliminar esta experiencia?');
    if(ok){
      this.serviciosexp.eliminarExperiencia(exp).subscribe( data => {
        this.experiencias = this.experiencias.filter( e => e!==exp);
        alert('Se elimino la experiencia.');
      });
    }
  }

 



}
