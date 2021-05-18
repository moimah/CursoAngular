import {Generic} from './generic';

export class Asignatura implements Generic{
  id: number;
  nombre: string;
  padre: Asignatura;
  hijos: Asignatura[] = [];
}
