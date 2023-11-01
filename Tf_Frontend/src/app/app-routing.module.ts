import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
