import { Injectable } from '@angular/core';
import {CommonService} from './common.service';
import {Curso} from '../models/curso';
import {HttpClient} from '@angular/common/http';
import {BASE_ENDPOINT} from '../config/app';
import {Alumno} from '../models/alumno';
import {Observable} from 'rxjs';
import {Examen} from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class CursoService  extends CommonService<Curso>{

  protected baseEndPoint: string = BASE_ENDPOINT + '/cursos';

  constructor(http: HttpClient) {
    super(http);
  }

  public asignarAlumnos(curso: Curso, alumnos: Alumno[]): Observable<Curso>{
    return this.http.put<Curso>(`${this.baseEndPoint}/${curso.id}/asignar-alumnos`, alumnos, {headers: this.headers});
  }

  public eliminarAlumno(curso: Curso, alumno: Alumno): Observable<Curso>{
    return this.http.put<Curso>(`${this.baseEndPoint}/${curso.id}/eliminar-alumno`, alumno, {headers: this.headers});
  }

  public asignarExamenes(curso: Curso, examenes: Examen[]): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndPoint}/${curso.id}/asignar-examenes`, examenes, {headers: this.headers});
  }

  public eliminarExamen(curso: Curso, examen: Examen): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndPoint}/${curso.id}/eliminar-examen`, examen, {headers: this.headers});
  }

  public obserCursoPorAlumnoId(alumno: Alumno): Observable<Curso>{
    return this.http.get<Curso>(`${this.baseEndPoint}/alumno/${alumno.id}`);
  }

}
