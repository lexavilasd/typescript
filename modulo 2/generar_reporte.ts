import { EstadoMatricula } from "./types/matricula";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

    case "SUSPENDIDA":
      return `Matrícula suspendida: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con media ${estado.notaMedia}`;

    default: {
      // 🔒 Análisis exhaustivo
      const _exhaustivo: never = estado;
      return _exhaustivo;
    }
  }
}
