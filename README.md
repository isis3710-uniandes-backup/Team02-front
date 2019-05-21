# Team02
### Video:
El link es: TODO

### Versión en vivo:
El link es: http://34.220.86.8:3000

### Descripción:
La idea del proyecto es hacer una página de reproducción de música, y de publicación de contenido musical. Es algo así como juntar Spotify y Soundcloud. Sin embargo, esperamos implementar un mejor sistema de recomendaciones y de creación de playlists que el de Spotify, y permitirle a los nuevos artistas obtener dinero por la reproducción de sus canciones.

### Para correrlo:
!!! Es necesario tener una cuenta de spotify. No hay necesidad de que sea premium
!!! Es necesario acceder a la cuenta de spotify antes de probar las funciones.

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
6. Ver información del usuario

### Consideraciones

#### General:
Utilizamos el API de spotify para obtener acceso a las diferentes canciones y artistas. Sin embargo, solo pueden ingresar aquellos usuarios con cuenta en spotify.

Las rutas genereadas en react no despliegan el contenido de la página en el back, por lo que hay que correr ambos a la vez.

#### Mockups:
Los Mockups se encuentran en la siguiente URI:

https://app.moqups.com/zu1M310iwx/view


