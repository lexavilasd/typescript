import { obtenerRecurso } from './services/api-client.js';
import { Estudiante, EstadoMatricula } from './domain/types/index.js';

function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case 'ACTIVA':
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas.`;
    case 'SUSPENDIDA':
      return `Matrícula suspendida. Motivo: ${estado.motivoSuspension}`;
    case 'FINALIZADA':
      return `Estudios finalizados con nota media: ${estado.notaMedia}`;
    default:
      const comprobacionExhaustiva: never = estado;
      throw new Error(`Estado no manejado: ${comprobacionExhaustiva}`);
  }
}

async function main() {
  const respuesta1 = await obtenerRecurso<Estudiante>('/estudiantes/1');
  const respuesta2 = await obtenerRecurso<Estudiante>('/estudiantes/2');

  console.log('Estudiante 1:', respuesta1.datos.nombre);
  console.log('Reporte:', generarReporte(respuesta1.datos.matricula));

  console.log('Estudiante 2:', respuesta2.datos.nombre);
  console.log('Reporte:', generarReporte(respuesta2.datos.matricula));
}

main().catch(console.error);