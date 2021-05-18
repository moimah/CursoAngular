import { Component, OnInit } from '@angular/core';
import {CommonListarComponent} from '../common-listar.component';
import {CursoService} from '../../services/curso.service';
import {Curso} from '../../models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent extends CommonListarComponent<Curso, CursoService>implements OnInit {

  constructor(service: CursoService) {
    super(service);
    this.titulo = 'listado de cursos';
    this.nombreModel = Curso.name;
  }

}
