# Team02
### Descripción:
La idea del proyecto es hacer una página de reproducción de música, y de publicación de contenido musical. Es algo así como juntar Spotify y Soundcloud. Sin embargo, esperamos implementar un mejor sistema de recomendaciones y de creación de playlists que el de Spotify, y permitirle a los nuevos artistas obtener dinero por la reproducción de sus canciones.

### Para correrlo:
!!! Es necesario tener una cuenta de spotify. No hay necesidad de que sea premium
!!! Es necesario acceder a la cuenta de spotify antes de probar las funciones.

1. Ir a la carpeta src: `$ cd src`
2. Instalar las dependencias: `$ npm install --save`
3. Ir a la carpeta front: `cd front`
4. Instalar las dependencias: `$ npm install --save`
5. Crear un build del api: `npm run build`
6. Volver a la carpeta del servidor: `cd ..`
7. Correr el servidor `npm start`
  * Si dice que falta cors ejecutar : `npm install cors --save` e intentar nuevamente
8. Ir a la url: http://localhost:3001/ y hacer el login para obtener el token de acceso.
9. Ir a la carpeta del front: `cd front`
10. Compilar el proyecto: `npm start`
11. Ir a la url: http://localhost:3000/menu

* La parte funcional se encuentra abajo a la derecha de la página principal
* El menu de inicio aún no tiene recomendaciones, por lo que no funciona. Funciona la parte de My Library (Mi Libreria), donde se pueden ver las playlists y canciones del usuario.
* Hay un conflicto entre react y el reproductor de spotify por lo que no reproduce canciones, sin embargo ya hace streaming de lo que suena en spotify. Lo último se puede probar reproduciendo una canción y seleccionando un dispositivo de reproducción diferente al actual (Dice que se necesita premium, pero no se ha verificado totalmente).

### Diagrama de clases:
UML link: https://www.lucidchart.com/invitations/accept/e41fe50b-a024-4455-aa34-b2a98cb44e8e
Diagrama Relacional: Aún pendiente de decisiones de diseño

### Tareas que funcionan correctamente conectando back y front:
1. Registrar una nueva cuenta
2. Ver las playlists que tiene un usuario
3. Ver las canciones de una playlist

### Consideraciones

#### General:
Utilizamos el API de spotify para obtener acceso a las diferentes canciones y artistas. Sin embargo, solo pueden ingresar aquellos usuarios con cuenta en spotify.

Las rutas genereadas en react no despliegan el contenido de la página en el back, por lo que hay que correr ambos a la vez.

Algunos navegadores tienen problema con CORS entre dos servidores diferentes. Si esto ocurre, instalar Moesif CORS en Chrome y encenderlo al realizar la prueba.
#### Video:
El link es: https://youtu.be/V9J5ONFWohE
#### Mockups:
Los Mockups se encuentran en la siguiente URI:

https://app.moqups.com/zu1M310iwx/view

#### Front:
Hace falta que el reproductor haga streaming de la canción seleccionada. Las vistas restantes son similares, solo hacen una petición distinta al back.

#### Back:
Hace falta la parte de hacer recomendaciones al usuario. Spotify ya brinda una buena base para ello.

