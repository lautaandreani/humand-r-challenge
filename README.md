# Run project

```
npm i // Install dependencies
npm run start // dev server
npm run build // build for production
```

### Milestones

# React Code Challenge

## Introducción

La finalidad del ejercicio es desarrollar una aplicación en React que liste personajes de Rick and Morty utilizando esta [API](https://rickandmortyapi.com/documentation/#rest).  
Tendrás 90 minutos para completarlo. Una vez pasados los 90 minutos, haremos otra llamada en la que nos deberás hacer una breve demo de la aplicación. En esa llamada, veremos el código entre y te haremos algunas preguntas sobre el mismo.

- Utilizar como template el siguiente [repositorio](https://github.com/HumandDev/r-code-challenge) (clonarlo localmente usando SSH).
- Imaginar que alguien de QA va a revisar el entregable teniendo en cuenta funcionalidad, usabilidad y performance.
- No hay un diseño definido, por lo que se espera que lo hagas a tu criterio. Ten en cuenta que la funcionalidad se priorizará sobre los estilos, por lo que te recomendamos terminar las funcionalidades requeridas antes de emprolijar el diseño.
- La aplicación está desarrollada usando Typescript (En caso de no saber usarlo, desestimar este punto y usar Javascript). Para esto, utilizando la documentación de la API, se pide completar la interfaz “Character” y el resto que sean necesarias.
- Utilizar una solución de manejo de estados a elección.
- Puedes instalar todas las bibliotecas que quieras.
- La parte 3 es opcional. Recomendamos que la hagas solo si ya terminaste completamente las primeras 2 partes.

## Parte 1 \- Listado paginado e Integración (\~40 mins) ✅

Mostrar en el Home de la aplicación un listado con todos los personajes de la serie. Se debe tener en cuenta que el endpoint utilizado está paginado. El entrevistado podrá elegir la estrategia de paginación a utilizar (botón de “siguiente”/”anterior”, botón de “cargar más”, infinite scrolling, etc.). Para cada personaje de la lista se deberá mostrar:

- Imagen
- Nombre
- Especie

## Parte 2 \- Búsqueda (\~30 mins) ✅

En el Home de la aplicación, se pide agregar un input y realizar los cambios necesarios para poder realizar una búsqueda por nombre.

## Parte 3 \- Detalle de un Personaje (Opcional) (\~20 mins) ✅

Al clickear algún personaje en el listado se deberá navegar al detalle del mismo. Ver el archivo routes.ts donde ya se definió una ruta para el detalle del personaje. Para cada personaje se deberá mostrar:

- Imagen
- Nombre
- Estado
- Species (Type), si es que tiene Type
- Last known location
- Listado de episodios en los que aparece (Mostrar únicamente el número)
