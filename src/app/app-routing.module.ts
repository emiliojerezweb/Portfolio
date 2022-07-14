import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'sobremi', component: SobreMiComponent},
  {path:'estudios', component: EstudiosComponent},
  {path:'experiencia', component: ExperienciaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
