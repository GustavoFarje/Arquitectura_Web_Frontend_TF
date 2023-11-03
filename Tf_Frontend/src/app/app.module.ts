import { Universidad } from './models/universidad';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { ListarCursoComponent } from './components/curso/listar-curso/listar-curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ListarProfesoresComponent } from './components/profesores/listar-profesores/listar-profesores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { CreaeditaProfesoresComponent } from './components/profesores/creaedita-profesores/creaedita-profesores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarreraprofesionalComponent } from './components/carreraprofesional/carreraprofesional.component';
import { CreaeditacarreraprofesionalComponent } from './components/carreraprofesional/creaeditacarreraprofesional/creaeditacarreraprofesional.component';
import { ListarcarreraprofesionalComponent } from './components/carreraprofesional/listarcarreraprofesional/listarcarreraprofesional.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { ListarUniversidadComponent } from './components/universidad/listar-universidad/listar-universidad.component';
import { CreaeditaUniversidadComponent } from './components/universidad/creaedita-universidad/creaedita-universidad.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    ListarProfesoresComponent,
    CreaeditaProfesoresComponent,
    CursoComponent,
    ListarCursoComponent,
    CreaeditaCursoComponent,
    CarreraprofesionalComponent,
    ListarcarreraprofesionalComponent,
    CreaeditacarreraprofesionalComponent,
    UniversidadComponent,
    ListarUniversidadComponent,
    CreaeditaUniversidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
