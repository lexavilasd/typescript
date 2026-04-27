// src/index.ts

import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils";

const datos: number[] = [10, 12, 14, 15, 100];

const media = calcularMedia(datos);
const mediana = calcularMediana(datos);
const filtrados = filtrarAtipicos(datos, 20);

console.log("Datos:", datos);
console.log("Media:", media);
console.log("Mediana:", mediana);
console.log("Sin atípicos:", filtrados);