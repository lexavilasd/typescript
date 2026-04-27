# Modelo de datos - Sistema universitario

## Decisiones de diseño

### Uso de interfaces
Se han utilizado `interface` en lugar de `type` para definir entidades como Estudiante y Asignatura porque:
- Son más adecuadas para representar objetos del dominio
- Permiten extensión futura (herencia)

### Uso de readonly
Los identificadores (`id`) son `readonly` para evitar modificaciones accidentales, simulando comportamiento de base de datos.

---

## Unión discriminada: EstadoMatricula

Se ha implementado una unión discriminada basada en la propiedad `tipo`.

Ventajas:
- Permite control exhaustivo mediante `switch`
- TypeScript puede inferir automáticamente el tipo en cada caso

---

## Genéricos en API

El método `obtenerRecurso<T>` permite reutilizar la lógica de acceso a datos para cualquier tipo.

Ejemplo:
- `T = Estudiante[]`
- `T = Asignatura[]`

Esto desacopla:
- La lógica de red
- El tipo de datos esperado

---

## RespuestaAPI<T>

Se ha creado un wrapper genérico para simular respuestas reales de backend:

- `data`: datos tipados
- `error`: control de fallo
- `mensaje`: información adicional

Esto refleja patrones reales en APIs REST.