import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { ServicioestudioService } from 'src/app/servicios/servicioestudio.service';

@Component({
  selector: 'app-crearestudio',
  templateUrl: './crearestudio.component.html',
  styleUrls: ['./crearestudio.component.css']
})
export class CrearestudioComponent implements OnInit {
  
  nuevoEstudio: Estudios = new Estudios();

  constructor(private router: Router, private servicioEstudio: ServicioestudioService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.nuevoEstudio.imagen="logonewestudio.png";
    this.servicioEstudio.crearEstudio(this.nuevoEstudio).subscribe(data =>
      {
        this.router.navigate(["/estudios"]);
      })
    }
}
