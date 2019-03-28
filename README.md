# Team02
### Descripción:
La idea del proyecto es hacer una página de reproducción de música, y de publicación de contenido musical. Es algo así como juntar Spotify y Soundcloud. Sin embargo, esperamos implementar un mejor sistema de recomendaciones y de creación de playlists que el de Spotify, y permitirle a los nuevos artistas obtener dinero por la reproducción de sus canciones.

### Consideraciones:

No se adjuntan archivos JSON de los recursos, puesto que se obtienen y persisten en la base de datos.

En esta entrega no se han hecho las relaciones en el back-end.

Utilizamos una base de datos en SQLite3.

### Para correrlo:

1. Ingresar el comando: $ cd src
2. Ingresar el comando: $ npm install
3. Ingresar el comando: $ npm start
4. se despliega en el puerto 3000

### Diagrama de clases:
UML link: https://www.lucidchart.com/invitations/accept/e41fe50b-a024-4455-aa34-b2a98cb44e8e
Diagrama Relacional: Aún pendiente de decisiones de diseño

### URIs de relaciones funcionando y listas para probar:

-Asociar una canción a una playlist
http://localhost:3000/cancion/1/anadiraplaylist/1

-Obtener las playlists de un usuario
http://localhost:3000/usuario/2/playlists

-Obtener las canciones de una playlist
http://localhost:3000/playlist/1/canciones

-Obtener los albumes de un artista
http://localhost:3000/artista/2/albumes

-Obtener las canciones de un album
http://localhost:3000/album/1/canciones

### Para ver otras UEIs funcionando:
Visitar la carpeta \src\pruebasPostman

### Tareas que funcionan correctamente conectando back y front:
1. Iniciar Sesión
2. Registrar una nueva cuenta
3. Ver las playlists que tiene un usuario
4. Ver las canciones de una playlist
