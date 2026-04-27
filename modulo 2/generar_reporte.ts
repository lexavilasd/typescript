export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas.`;

    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media ${estado.notaMedia}`;

    default:
      // Esto asegura exhaustividad en TypeScript
      const _exhaustivo: never = estado;
      return _exhaustivo;
  }
}