import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  usuarioForm: FormGroup | any;
  constructor(private fb: FormBuilder, private proyectosSvc: ProyectoService) { }

  ngOnInit(): void {
    this.initForm();
  }

  Guardar(): void {
    if(this.usuarioForm.valid){
      const proyecto =  this.usuarioForm.value;
      this.proyectosSvc.registrarProyecto(proyecto, '');
      this.usuarioForm.reset();
    }
  }

  private initForm():void {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      objetivo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }
}
