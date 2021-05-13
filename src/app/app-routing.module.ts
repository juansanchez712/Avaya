import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'registrar', loadChildren: () => import('./pages/usuarios/registrar/registrar.module').then(m => m.RegistrarModule) },
  { path: 'lista-proyectos', loadChildren: () => import('./pages/proyectos/lista/lista.module').then(m => m.ListaModule) },
  { path: 'registrar-proyectos', loadChildren: () => import('./pages/proyectos/registrar/registrar.module').then(m => m.RegistrarModule) },
  { path: 'aportar', loadChildren: () => import('./pages/proyectos/aportar/aportar.module').then(m => m.AportarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
