export interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
  fechaIngreso: Date;
  matricula: EstadoMatricula;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
  profesor: string;
}


export interface MatriculaActiva {
  tipo: 'ACTIVA';
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: 'SUSPENDIDA';
  motivoSuspension: string;
}

export interface MatriculaFinalizada {
  tipo: 'FINALIZADA';
  notaMedia: number;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;


export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}