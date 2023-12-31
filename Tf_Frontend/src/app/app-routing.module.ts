import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraprofesionalComponent } from './components/carreraprofesional/carreraprofesional.component';
import { CreaeditacarreraprofesionalComponent } from './components/carreraprofesional/creaeditacarreraprofesional/creaeditacarreraprofesional.component';
import { CursoComponent } from './components/curso/curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { CreaeditaProfesoresComponent } from './components/profesores/creaedita-profesores/creaedita-profesores.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { CreaeditaUniversidadComponent } from './components/universidad/creaedita-universidad/creaedita-universidad.component';

const routes: Routes = [
  {
    path: 'profesores',
    component: ProfesoresComponent,
    children: [
      {path: 'nuevo', component: CreaeditaProfesoresComponent},
      {path: 'ediciones/:id', component: CreaeditaProfesoresComponent},
    ]
  },
  {
    path: 'curso',
    component: CursoComponent,
    children: [
      {path: 'nuevo', component: CreaeditaCursoComponent},
      {path: 'ediciones/:id', component:CreaeditaCursoComponent},
    ]
  },
  {
    path: 'CarrerasProfesionales',
    component: CarreraprofesionalComponent,
    children: [
      {path: 'nuevo', component: CreaeditacarreraprofesionalComponent},
      {path: 'ediciones/:id', component:CreaeditacarreraprofesionalComponent},
    ]
  },
  {
    path: 'universidad',
    component: UniversidadComponent,
    children: [
      {path: 'nuevo', component: CreaeditaUniversidadComponent},
      {path: 'ediciones/:id', component:CreaeditaUniversidadComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
