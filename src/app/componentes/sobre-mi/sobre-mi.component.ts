import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelos/Persona';


import { ServiciopersonaService } from 'src/app/servicios/serviciopersona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: Persona[];
  constructor(private serviperso: ServiciopersonaService) { }

  ngOnInit(): void {
    this.obtenerPersona();
  }

  private obtenerPersona(){
    this.serviperso.verPersona().subscribe(data => {
      this.persona = data;

    })
  }
}
