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
<<<<<<< HEAD
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { NuevoestudioComponent } from './estudios/nuevoestudio/nuevoestudio.component';
>>>>>>> 1aecd8e640803ef3ace47dc3a1ef68b3becccf4d


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
<<<<<<< HEAD
    CrearestudioComponent,
    EditarestudioComponent,
=======
    NuevoestudioComponent,
>>>>>>> 1aecd8e640803ef3ace47dc3a1ef68b3becccf4d
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
