import { Asignatura } from "./asignatura";

// ACTIVA
export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

// SUSPENDIDA
export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

// FINALIZADA
export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

// Unión discriminada
export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;