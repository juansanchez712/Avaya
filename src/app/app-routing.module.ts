import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'lista', loadChildren: () => import('./pages/usuarios/lista/lista.module').then(m => m.ListaModule) }, 
  {path: 'registrar', loadChildren: () => import('./pages/usuarios/registrar/registrar.module').then(m => m.RegistrarModule) },
  { path: 'detalles', loadChildren: () => import('./pages/usuarios/detalles/detalles.module').then(m => m.DetallesModule) },
  { path: 'lista-proyectos', loadChildren: () => import('./pages/proyectos/lista/lista.module').then(m => m.ListaModule) },
  { path: 'registrar-proyectos', loadChildren: () => import('./pages/proyectos/registrar/registrar.module').then(m => m.RegistrarModule) },
  { path: 'detalles-proyectos', loadChildren: () => import('./pages/proyectos/detalles/detalles.module').then(m => m.DetallesModule) },
  { path: 'aportar', loadChildren: () => import('./pages/proyectos/aportar/aportar.module').then(m => m.AportarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
