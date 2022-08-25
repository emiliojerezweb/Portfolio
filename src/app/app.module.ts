import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarpersonaComponent } from './componentes/editarpersona/editarpersona.component';
import { EditarexperienciaComponent } from './componentes/editarexperiencia/editarexperiencia.component';
import { CrearhabilidadComponent } from './componentes/crearhabilidad/crearhabilidad.component';
import { EditarhabilidadComponent } from './componentes/editarhabilidad/editarhabilidad.component';
import { CrearexperienciasComponent } from './componentes/crearexperiencias/crearexperiencias.component';
import { FooterComponent } from './componentes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    CursosComponent,
    CrearestudioComponent,
    EditarestudioComponent,
    EditarpersonaComponent,
    EditarexperienciaComponent,
    CrearhabilidadComponent,
    EditarhabilidadComponent,
    CrearexperienciasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
