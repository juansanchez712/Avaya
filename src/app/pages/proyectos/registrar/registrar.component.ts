import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  proyectoForm: FormGroup | any;
  constructor(private fb: FormBuilder, private proyectosSvc: ProyectoService) { }

  ngOnInit(): void {
    this.initForm();
  }

  Guardar(): void {
    if(this.proyectoForm.valid){
      const proyecto =  this.proyectoForm.value;
      this.proyectosSvc.registrarProyecto(proyecto, '');
      this.proyectoForm.reset();
    }
  }

  private initForm():void {
    this.proyectoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      objetivo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }
}
