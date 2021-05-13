import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  proyectos$ = this.proyectoSvc.proyectos;
  constructor(private router: Router, private proyectoSvc : ProyectoService) { }

  ngOnInit(): void {
  }

  Aportar(proyecto:any):void {
    this.router.navigate(['aportar'])
  }

}
