import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CreareditarexpComponent } from './componentes/creareditarexp/creareditarexp.component';
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
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
  {path:'contacto', component:ContactoComponent},
  {path:'crearestudio', component: CrearestudioComponent},
  {path:'editarestudio', component: EditarestudioComponent},
  {path:'editarpersona', component: EditarpersonaComponent},
  {path:'creareditarexp', component: CreareditarexpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
