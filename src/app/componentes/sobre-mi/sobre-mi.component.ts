import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelos/Persona';


import { ServiciopersonaService } from 'src/app/servicios/serviciopersona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  personas: Persona[];
  constructor(private serviperso: ServiciopersonaService,
              private router: Router) { }

  ngOnInit(): void {
    this.obtenerPersona();
  }

  private obtenerPersona(){
    this.serviperso.verPersona().subscribe(data => {
      this.personas = data;

    })
  }
  
  editarMe(persona:Persona){
    localStorage.setItem("id", persona.id.toString());
    console.log(persona);
    this.router.navigate(['/editarpersona'])
  }
}
