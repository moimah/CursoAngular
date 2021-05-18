import { Component, OnInit } from '@angular/core';
import {CommonFormComponent} from '../common-form.component';
import {CursoService} from '../../services/curso.service';
import {Curso} from '../../models/curso';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent extends CommonFormComponent<Curso, CursoService> implements OnInit {

  constructor(service: CursoService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
    this.titulo = 'Crear Curso';
    this.model =  new Curso();
    this.redirect = '/cursos';
    this.nombreModel = Curso.name;
  }

}
