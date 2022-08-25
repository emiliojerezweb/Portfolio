import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudioService } from 'src/app/servicios/servicioestudio.service';

@Component({
  selector: 'app-editarestudio',
  templateUrl: './editarestudio.component.html',
  styleUrls: ['./editarestudio.component.css']
})
export class EditarestudioComponent implements OnInit {
  
  nuevoEstudio = new Estudios();
  
  constructor(private router: Router, 
              private servicioEstudio: ServicioestudioService) { }


  ngOnInit(): void {
    this.edicionEstudio();
  }
     
  edicionEstudio(){
    let id = localStorage.getItem("id");
    this.servicioEstudio.verEstudioporId(+id).subscribe(data =>{
        this.nuevoEstudio=data;
    })
  }

  guardarCambios(estudio: Estudios){
    this.servicioEstudio.editarEstudio(estudio).subscribe( data =>
      {
        this.nuevoEstudio = data;
        this.router.navigate(["/experiencia"]);
      })
  }
}
