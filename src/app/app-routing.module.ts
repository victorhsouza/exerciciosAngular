import { ListarCursos2Component } from './components/cursos/listar-cursos2/listar-cursos2.component';
import { ListarCursosComponent } from './components/cursos/listar-cursos/listar-cursos.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'cursos/listar-cursos', component:ListarCursosComponent},
  {path:'cursos/listar-cursos2', component:ListarCursos2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
