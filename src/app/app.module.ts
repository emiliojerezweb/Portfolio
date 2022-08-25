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
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoestudioComponent } from './estudios/nuevoestudio/nuevoestudio.component';
import { EditarpersonaComponent } from './componentes/editarpersona/editarpersona.component';
import { CreareditarexpComponent } from './componentes/creareditarexp/creareditarexp.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    CursosComponent,
    ContactoComponent,
    CrearestudioComponent,
    EditarestudioComponent,
    NuevoestudioComponent,
    EditarpersonaComponent,
    CreareditarexpComponent,
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
