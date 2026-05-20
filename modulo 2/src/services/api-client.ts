import { RespuestaAPI } from '../domain/types/index.js';


const baseDeDatos: Record<string, unknown> = {
  '/estudiantes/1': {
    id: '1',
    nombre: 'Ana García',
    email: 'ana@universidad.es',
    fechaIngreso: new Date('2022-09-01'),
    matricula: {
      tipo: 'ACTIVA',
      asignaturas: [
        { id: 'A1', nombre: 'Matemáticas', creditos: 6, profesor: 'Prof. López' },
        { id: 'A2', nombre: 'Programación', creditos: 8, profesor: 'Prof. Martín' },
      ],
    },
  },
  '/estudiantes/2': {
    id: '2',
    nombre: 'Carlos Ruiz',
    email: 'carlos@universidad.es',
    fechaIngreso: new Date('2021-09-01'),
    matricula: {
      tipo: 'FINALIZADA',
      notaMedia: 8.4,
    },
  },
};


export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = baseDeDatos[endpoint];
      if (!datos) {
        reject(new Error(`Recurso no encontrado: ${endpoint}`));
        return;
      }
      resolve({
        codigoEstado: 200,
        exito: true,
        datos: datos as T,
      });
    }, 300);
  });
}