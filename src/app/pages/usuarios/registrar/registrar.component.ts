import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  usuarioForm: FormGroup | any;
  constructor(private fb: FormBuilder, private usuariosSvc: UsuarioService) { }

  ngOnInit(): void {
    this.initForm();
  }

  Guardar(): void {
    if(this.usuarioForm.valid){
      const usuario =  this.usuarioForm.value;
      this.usuariosSvc.registrarProyecto(usuario, '');
      this.usuarioForm.reset();
    }
  }

  private initForm():void {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    })
  }

}
