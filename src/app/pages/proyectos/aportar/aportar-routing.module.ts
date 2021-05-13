import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AportarComponent } from './aportar.component';

const routes: Routes = [{ path: '', component: AportarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AportarRoutingModule { }
