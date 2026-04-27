export interface RespuestaAPI<T> {
  data: T;
  error: boolean;
  mensaje?: string;
}

export class ApiClient {
  obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulación de datos según endpoint
        let mockData: unknown;

        if (endpoint === "/estudiantes") {
          mockData = [
            { id: "1", nombre: "Ana", edad: 20 },
            { id: "2", nombre: "Luis", edad: 22 }
          ];
        } else if (endpoint === "/asignaturas") {
          mockData = [
            { id: "a1", nombre: "Matemáticas", creditos: 6 },
            { id: "a2", nombre: "Historia", creditos: 4 }
          ];
        } else {
          resolve({
            data: null as T,
            error: true,
            mensaje: "Endpoint no encontrado"
          });
          return;
        }

        resolve({
          data: mockData as T,
          error: false
        });
      }, 1000);
    });
  }
}