import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/proyecto.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyectos: Observable<Proyecto[]> | undefined;

  private proyectosCollection: AngularFirestoreCollection<Proyecto>;
  constructor(private readonly afs : AngularFirestore) { 
    this.proyectosCollection = afs.collection<Proyecto>('proyectos');
    this.getProyectos();
  }

  registrarProyecto(project: Proyecto, empId: string): Promise<void>{
    return new Promise(async(resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = {id, ... project};
        const resultado = await this.proyectosCollection.doc(id).set(data);
        resolve(resultado);
      }catch (err){
          reject(err.message);
      }
    })
  }
  private getProyectos(): void {
    this.proyectos = this.proyectosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Proyecto))
    )
  }

}

