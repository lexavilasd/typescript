import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

const datos: number[] = [10, 12, 11, 100, 9, 13, 11, 10, 95, 12];

console.log('Datos:', datos);
console.log('Media:', calcularMedia(datos));
console.log('Mediana:', calcularMediana(datos));
console.log('Sin atípicos (límite 20):', filtrarAtipicos(datos, 20));

// Caso límite: array vacío
console.log('Media array vacío:', calcularMedia([]));
console.log('Mediana array vacío:', calcularMediana([]));
console.log('Filtrar array vacío:', filtrarAtipicos([], 10));