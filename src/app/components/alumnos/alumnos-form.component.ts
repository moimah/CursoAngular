import { Component, OnInit } from '@angular/core';
import {Alumno} from '../../models/alumno';
import {AlumnoService} from '../../services/alumno.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CommonFormComponent} from '../common-form.component';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent extends CommonFormComponent<Alumno, AlumnoService>   implements OnInit {

  private fotoSeleccionada: File;

  constructor(service: AlumnoService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
    this.titulo = 'Crear Alumnos';
    this.model = new Alumno();
    this.redirect = '/alumnos';
    this.nombreModel = Alumno.name;
  }

  public seleccionarFoto(event: any): void{
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);

    if (this.fotoSeleccionada.type.indexOf('image') < 0){
      const file: File = this.fotoSeleccionada as File;
      // @ts-ignore
      this.fotoSeleccionada = null;
      Swal.fire('Error al seleccionar la foto: ', 'El archivo debe ser del tipo imagen', 'error');
    }
  }

  public crear(): void {
    if (!this.fotoSeleccionada){
      super.crear();
    }else{
      this.service.crearConFoto(this.model, this.fotoSeleccionada).subscribe(alumno => {
        console.log(alumno);
        Swal.fire( 'Creado:', `${this.nombreModel} ${alumno.nombre} creado con éxito`, 'success');
        this.router.navigate([`/${this.redirect}`]);
      }, err => {
        if (err.status === 400){
          this.error = err.error;
          console.log(this.error);
        }
      });
    }
  }

  public editar(): void {
    if (!this.fotoSeleccionada){
      super.crear();
    }else{
      this.service.editarConFoto(this.model, this.fotoSeleccionada).subscribe(alumno => {
        console.log(alumno);
        Swal.fire( 'Modificado:', `${this.nombreModel} ${alumno.nombre} editado con éxito`, 'success');
        this.router.navigate([`/${this.redirect}`]);
      }, err => {
        if (err.status === 400){
          this.error = err.error;
          console.log(this.error);
        }
      });
    }
  }

}
