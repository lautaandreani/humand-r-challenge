# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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

## Parte 1 \- Listado paginado e Integración (\~40 mins)

Mostrar en el Home de la aplicación un listado con todos los personajes de la serie. Se debe tener en cuenta que el endpoint utilizado está paginado. El entrevistado podrá elegir la estrategia de paginación a utilizar (botón de “siguiente”/”anterior”, botón de “cargar más”, infinite scrolling, etc.). Para cada personaje de la lista se deberá mostrar:

- Imagen
- Nombre
- Especie

## Parte 2 \- Búsqueda (\~30 mins)

En el Home de la aplicación, se pide agregar un input y realizar los cambios necesarios para poder realizar una búsqueda por nombre.

## Parte 3 \- Detalle de un Personaje (Opcional) (\~20 mins)

Al clickear algún personaje en el listado se deberá navegar al detalle del mismo. Ver el archivo routes.ts donde ya se definió una ruta para el detalle del personaje. Para cada personaje se deberá mostrar:

- Imagen
- Nombre
- Estado
- Species (Type), si es que tiene Type
- Last known location
- Listado de episodios en los que aparece (Mostrar únicamente el número)
