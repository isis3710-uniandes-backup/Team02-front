# Team02
### Descripción:
La idea del proyecto es hacer una página de reproducción de música, y de publicación de contenido musical. Es algo así como juntar Spotify y Soundcloud. Sin embargo, esperamos implementar un mejor sistema de recomendaciones y de creación de playlists que el de Spotify, y permitirle a los nuevos artistas obtener dinero por la reproducción de sus canciones.

### Consideraciones:

No se adjuntan archivos JSON de los recursos, puesto que se obtienen y persisten en la base de datos.

En esta entrega no se han hecho las relaciones en el back-end.

Utilizamos una base de datos en SQLite3.

### Para correrlo:

1. Ingresar el comando: `$ cd src`
2. Ingresar el comando: `$ npm install --save`
3. Ingresar el comando: `$ npm start`
4. Ir a http://localhost:3001/
* No hay autenticación por lo que con solo presionar login se puede ir a la página principal de la aplicación.

### Diagrama de clases:
UML link: https://www.lucidchart.com/invitations/accept/e41fe50b-a024-4455-aa34-b2a98cb44e8e
Diagrama Relacional: Aún pendiente de decisiones de diseño

### URIs de relaciones funcionando y listas para probar:

-Asociar una canción a una playlist
http://localhost:3001/cancion/1/anadiraplaylist/1

-Obtener las playlists de un usuario
http://localhost:3001/usuario/2/playlists

-Obtener las canciones de una playlist
http://localhost:3001/playlist/1/canciones

-Obtener los albumes de un artista
http://localhost:3001/artista/2/albumes

-Obtener las canciones de un album
http://localhost:3001/album/1/canciones

### Para ver otras UEIs funcionando:
Visitar la carpeta \src\pruebasPostman

### Tareas que funcionan correctamente conectando back y front:
1. Registrar una nueva cuenta
2. Ver las playlists que tiene un usuario
3. Ver las canciones de una playlist

### Consideraciones
#### Front:
A pesar de que la cantidad de tareas en el front es pequeña, se tiene una buena base para seguir trabajando. Lo último hace referencia a que a partir de las vistas y funciones que tenemos, implementar lo que hace falta no se demora más de un día.

Por otra parte, se trabajo cambiando el contenido del root sin hacer enrutamiento en el frontend. La razón principal es porque hubo un cruce entre rutas del front y rutas del back, lo que arrojaba un error 404 al intentar acceder a una ruta del front luego de hacer el built.

Aún no hay autenticación implementada.
