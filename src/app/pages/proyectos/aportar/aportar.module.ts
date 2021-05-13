import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AportarRoutingModule } from './aportar-routing.module';
import { AportarComponent } from './aportar.component';


@NgModule({
  declarations: [
    AportarComponent
  ],
  imports: [
    CommonModule,
    AportarRoutingModule
  ]
})
export class AportarModule { }
