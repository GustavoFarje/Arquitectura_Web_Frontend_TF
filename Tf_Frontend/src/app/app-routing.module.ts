import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { CreaeditaCursoComponent } from './components/curso/creaedita-curso/creaedita-curso.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { CreaeditaProfesoresComponent } from './components/profesores/creaedita-profesores/creaedita-profesores.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
