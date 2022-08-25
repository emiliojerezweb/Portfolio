import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { ServiciopersonaService } from 'src/app/servicios/serviciopersona.service';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  persona = new Persona();

  constructor(private servicioperso: ServiciopersonaService, private router: Router) { }

  ngOnInit(): void {
    this.edicionPersona();
  }

  edicionPersona(){
    let id = localStorage.getItem("id");
    this.servicioperso.verPersonaporId(+id).subscribe( perso =>{
      this.persona= perso;
  });
  }

  guardarPersona(persona: Persona){
    this.servicioperso.editarPersona(persona).subscribe(perso => {
      this.persona = perso;
      this.router.navigate(["/sobremi"]);
    })
  }
}
