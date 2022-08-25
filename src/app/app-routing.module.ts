import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';
import { CrearexperienciasComponent } from './componentes/crearexperiencias/crearexperiencias.component';
import { CrearhabilidadComponent } from './componentes/crearhabilidad/crearhabilidad.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
import { EditarexperienciaComponent } from './componentes/editarexperiencia/editarexperiencia.component';
import { EditarhabilidadComponent } from './componentes/editarhabilidad/editarhabilidad.component';
import { EditarpersonaComponent } from './componentes/editarpersona/editarpersona.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path:'portfolio', component: PrincipalComponent},
  {path:'sobremi', component: SobreMiComponent},
  {path:'estudios', component: EstudiosComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'curso', component: CursosComponent},
  {path:'crearestudio', component: CrearestudioComponent},
  {path:'editarestudio', component: EditarestudioComponent},
  {path:'editarpersona', component: EditarpersonaComponent},
  {path:'crearexp', component: CrearexperienciasComponent},
  {path: 'editarexp', component: EditarexperienciaComponent},
  {path: 'editarhabil', component: EditarhabilidadComponent},
  {path: 'crearhabil', component: CrearhabilidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
