# Team02
### Video:
El link es: TODO

### Versión en vivo:
El link es: http://34.220.86.8:3000

### Descripción:
La idea del proyecto es hacer una página de reproducción de música, y de publicación de contenido musical. Trabajando con la librería de Spotify, se implementa un mejor sistema de recomendaciones que el que tiene Spotify actualmente a partir de los gustos del usuario y de unos parámetros que debe dar. Por otra parte, se incluyeron stats del usuario como su top 5 de canciones y las caracteristicas que tienen las canciones que más escucha.

### Para correrlo:
!!! Es necesario tener una cuenta de spotify. Para reproducir la música es necesario que sea premium.

1. Ir a la carpeta src: `$ cd src`
2. Instalar las dependencias: `$ npm install --save`
3. Correr el servidor `$ npm start`
4. Ir a la carpeta front: `cd front`
5. Instalar las dependencias: `npm install --save`
6. Correr el servidor `npm start`
7. Ir a la url: http://localhost:3000

### Diagrama de clases:
UML link: https://www.lucidchart.com/invitations/accept/e41fe50b-a024-4455-aa34-b2a98cb44e8e

### Tareas que funcionan correctamente conectando back y front:
1. Iniciar sesión
2. Ver las playlists que tiene un usuario
3. Ver las canciones de una playlist
4. Reproducir una canción
5. Crear una playlist automática
6. Eliminar canciones de una playlist
7. Ver información del usuario

### Consideraciones

#### General:
Utilizamos el API de spotify para obtener acceso a las diferentes canciones y artistas. Sin embargo, solo pueden ingresar aquellos usuarios con cuenta en spotify.

Las rutas genereadas en react no despliegan el contenido de la página en el back, por lo que hay que correr ambos a la vez.

#### Mockups:
Los Mockups se encuentran en la siguiente URI:

https://app.moqups.com/zu1M310iwx/view


