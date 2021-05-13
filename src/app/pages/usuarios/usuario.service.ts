import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Observable<Usuario[]> | undefined;

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  constructor(private readonly afs : AngularFirestore) { 
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.getUsuarios();
  }

  registrarProyecto(user: Usuario, empId: string): Promise<void>{
    return new Promise(async(resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = {id, ... user};
        const resultado = await this.usuariosCollection.doc(id).set(data);
        resolve(resultado);
      }catch (err){
          reject(err.message);
      }
    })
  }
  private getUsuarios(): void {
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Usuario))
    )
  }
}
