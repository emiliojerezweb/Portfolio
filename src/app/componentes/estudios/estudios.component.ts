
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterLink } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudioService } from 'src/app/servicios/servicioestudio.service';
import { EditarestudioComponent } from '../editarestudio/editarestudio.component';
=======
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudiosService } from 'src/app/servicios/servicioestudios.service';
>>>>>>> 1aecd8e640803ef3ace47dc3a1ef68b3becccf4d

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

<<<<<<< HEAD
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

  editarEstudio(estudio: Estudios){
    localStorage.setItem("id", estudio.id.toString());
    this.router.navigate(["/editarestudio"]);
  }

  crearEstudio(){
    this.router.navigate(["/crearestudio"]);
  }

  borrarEstudio(estudio:Estudios){
    const ok = confirm('borrar?');
    if(ok){
      this.servicioEstudio.eliminarEstudio(estudio).subscribe(data =>{
        this.estudios = this.estudios.filter(e => e!==estudio);
        alert('El estudio: ' + estudio.titulo + ' se elimino');
      });
    }
=======
  estudios : Estudios[];
  constructor(private serviEstudio: ServicioestudiosService) { }

  ngOnInit(): void {
    this.obtenerEstudios();
  }

  obtenerEstudios(){
    this.serviEstudio.verEstudios().subscribe(data =>
      { 
        this.estudios = data;
        console.log(data); 
      })
  }
>>>>>>> 1aecd8e640803ef3ace47dc3a1ef68b3becccf4d
}


}


