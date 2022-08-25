
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';import { ServicioestudioService } from 'src/app/servicios/servicioestudio.service';
;



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
      this.estudios = data;
    })
  }

  editarEstudio(estudio: Estudios){
    localStorage.setItem("id", estudio.id.toString());
    this.router.navigate(["/editarestudio"]);
  }

  crearEstudio(){
    this.router.navigate(["/crearestudio"]);
  }

  borrarEstudio(estudio:Estudios){
    const ok = confirm('Desea eliminar el estudio?');
    if(ok){
      this.servicioEstudio.eliminarEstudio(estudio).subscribe(data =>{
        this.estudios = this.estudios.filter(e => e!==estudio);
        alert('El estudio se elimino');
      });
    }
  }
}


