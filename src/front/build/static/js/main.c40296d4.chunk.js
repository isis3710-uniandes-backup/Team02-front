(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},28:function(e,a){},34:function(e){e.exports={Home:"Inicio",Discover:"Descubre",Search:"Buscar","Your Library":"Tu Librer\xeda","Your Songs":"Tus Canciones","Made For You":"Hecho Para Ti","Create Playlist":"Crear Lista De Reproducci\xf3n","I'm Feeling Lucky":"Me Siento Con Suerte",Settings:"Configuraciones",Account:"Cuenta","Our Selections":"Nuestras Selecciones","Your Albums":"Tus Albumes","Your Artists":"Tus Artistas","Your Playlists":"Tus Listas De Reproducci\xf3n","See all the playlists":"Mira todas las listas de reproducci\xf3n que has creado hasta ahora, compartelas o crea una nueva.","Sign In":"Accede","Don't have an account? ":"\xbfNo tienes cuenta? ","Sign Up":"Reg\xedstrate","Connect using spotify":"Conectar a trav\xe9s de Spotify",Name:"Nombre",Artist:"Artista",Album:"Album","My PlayLists":"Mis Listas De Reproducci\xf3n","Created By: ":"Creado Por: "}},35:function(e){e.exports={Home:"Home",Discover:"Discover",Search:"Search","Your Library":"Your Library","Your Songs":"Your Songs","Made For You":"Made For You","Create Playlist":"Create Playlist","I'm Feeling Lucky":"I'm Feeling Lucky",Settings:"Settings",Account:"Account","Our Selections":"Our Selections","Your Albums":"Your Albums","Your Artists":"Your Artists","Your Playlists":"Your Playlists","See all the playlists":"See all the playlists you have created until now, share them or create a new one.","Sign In":"Sign In","Don't have an account? ":"Don't have an account? ","Sign Up":"Sign Up","Connect using spotify":"Connect using spotify",Name:"Name",Artist:"Artist",Album:"Album","My PlayLists":"My PlayLists","Created By: ":"Created By: "}},36:function(e,a,t){e.exports=t(68)},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},51:function(e,a){},57:function(e,a){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(19),l=t.n(s),r=(t(41),t(3)),i=t(4),o=t(6),m=t(5),u=t(7),d=(t(42),t(43),t(1)),p=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement(d.a,{id:"Home"})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"section-header"},c.a.createElement(d.a,{id:"Our Selections"})),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"})),c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"})),c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"})),c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"section-header"},c.a.createElement(d.a,{id:"Made For You"})),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"})),c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"})),c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"})),c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("div",{className:"temp-image"}))),c.a.createElement("br",null)))}}]),a}(n.Component),h=t(13),y=(t(25),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={nombre:t.props.playlist.name,id:t.props.playlist.id,image:t.props.playlist.images[0].url,creador:t.props.playlist.owner.display_name},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-sm-3 clickable"},c.a.createElement("a",{className:"styledLink",href:this.state.id+"/tracks"},c.a.createElement("div",{className:"row"},c.a.createElement("img",{className:"img-responsive center-block",src:this.state.image})),c.a.createElement("h4",null,this.state.nombre),c.a.createElement("p",{className:"section-content"}," ",c.a.createElement(d.a,{id:"Created By:"})," ",this.state.creador)))}}]),a}(n.Component)),E=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={playlists:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/menu/playlists").then(function(a){a.json().then(function(a){console.log(a.items),e.setState({playlists:a.items})})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container",id:"playlist"},c.a.createElement("div",{className:"header"},c.a.createElement(d.a,{id:"My PlayLists"})),c.a.createElement("div",{className:"content",id:"song"},c.a.createElement("div",{className:"row"},this.state.playlists.map(function(e,a){return c.a.createElement(y,{key:a,playlist:e})}))))}}]),a}(n.Component),v=(t(26),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={name:t.props.song.track.name,artist:t.props.song.track.artists[0].name,album:t.props.song.track.album.name,uri:t.props.song.track.uri},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row table-item "},c.a.createElement("div",{className:"col-sm-1 function clickable",onClick:function(){return e.playSong(e.state.uri)}},c.a.createElement("center",null,c.a.createElement("i",{className:"fas fa-play-circle"}))),c.a.createElement("div",{className:"col-sm-5"},this.state.name),c.a.createElement("div",{className:"col-sm-2"},this.state.artist),c.a.createElement("div",{className:"col-sm-3"},this.state.album),c.a.createElement("div",{className:"col-sm-1 function clickable"},c.a.createElement("center",null,c.a.createElement("i",{className:"fas fa-ellipsis-h"}))))}},{key:"playSong",value:function(e){fetch("http://localhost:3001/play/tracks/".concat(this.props.song.track.id)).then(function(e){e.text().then(function(e){console.log(e)})})}}]),a}(n.Component)),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={name:"",songs:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),fetch("http://localhost:3001/menu/playlists/".concat(this.props.match.params.idPlaylist,"/tracks")).then(function(a){a.json().then(function(a){console.log(a),e.setState({name:a.name}),e.setState({songs:a.tracks.items})})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container",id:"song"},c.a.createElement("div",{className:"header"},this.state.name),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"row table-header"},c.a.createElement("div",{className:"col-sm-1"}),c.a.createElement("div",{className:"col-sm-5"},c.a.createElement(d.a,{id:"Name"})),c.a.createElement("div",{className:"col-sm-2"},c.a.createElement(d.a,{id:"Artist"})),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(d.a,{id:"Album"})),c.a.createElement("div",{className:"col-sm-1"}))),this.state.songs.map(function(a,t){return c.a.createElement(v,{key:t,song:a,accessToken:e.props.match.params.accessToken})}))}}]),a}(n.Component),f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={accessToken:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;!0,fetch("http://localhost:3001/menu").then(function(a){a.text().then(function(a){e.setState({accessToken:a}),console.log(e.state),e.startWebPlayer(a)})})}},{key:"changeSelected",value:function(e){}},{key:"render",value:function(){return c.a.createElement("div",{id:"main"},c.a.createElement("div",{className:"d-flex",id:"wrapper"},c.a.createElement("div",{id:"sidebar-wrapper"},c.a.createElement("div",{className:"list-group list-group-flush"},c.a.createElement("a",{className:"styledLink",href:"/menu",onClick:this.changeSelected("home")},c.a.createElement("div",{className:"sidebar-heading selected",id:"home"},c.a.createElement("i",{className:"fas fa-home"})," ",c.a.createElement(d.a,{id:"Home"}),"  ")),c.a.createElement("a",{className:"styledLink",href:"/menu/"+this.state.accessToken+"/playlists/",onClick:this.changeSelected("Your Library")},c.a.createElement("div",{className:"sidebar-heading",id:"Your Library"},c.a.createElement("i",{className:"fas fa-book-open"})," ",c.a.createElement(d.a,{id:"Your Library"}))),c.a.createElement("div",{className:"sidebar-heading"},c.a.createElement("i",{className:"fas fa-smile-wink"})," ",c.a.createElement(d.a,{id:"Made For You"})," "),c.a.createElement("div",{className:"sidebar-heading"},c.a.createElement("i",{className:"fas fa-plus-circle"})," ",c.a.createElement(d.a,{id:"Create Playlist"})," "),c.a.createElement("div",{className:"sidebar-heading"},c.a.createElement("i",{className:"fas fa-play-circle"})," ",c.a.createElement(d.a,{id:"I'm Feeling Lucky"})),c.a.createElement("div",{className:"sidebar-heading"},c.a.createElement("i",{className:"fas fa-user-circle"})," ",c.a.createElement(d.a,{id:"Account"})," "))),c.a.createElement("div",{className:"background"},c.a.createElement(h.a,{exact:!0,path:"/menu/",component:p}),c.a.createElement(h.a,{exact:!0,path:"/menu/:accessToken/playlists/",component:E}),c.a.createElement(h.a,{exact:!0,path:"/menu/:accessToken/playlists/:idPlaylist/tracks",component:b}))))}},{key:"startWebPlayer",value:function(e){var a=document.createElement("script");a.src="https://sdk.scdn.co/spotify-player.js",a.async=!0,document.body.appendChild(a);var t=document.createElement("script");t.setAttribute("id","PlayerScript");var n=document.createTextNode("window.onSpotifyWebPlaybackSDKReady = () => {\n      const token = '".concat(e,"';\n      const player = new Spotify.Player({\n        name: 'Playlist Maker',\n        getOAuthToken: cb => { cb(token); }\n      });\n    \n      // Error handling\n      player.addListener('initialization_error', ({ message }) => { console.error(message); });\n      player.addListener('authentication_error', ({ message }) => { console.error(message); });\n      player.addListener('account_error', ({ message }) => { console.error(message); });\n      player.addListener('playback_error', ({ message }) => { console.error(message); });\n    \n      // Playback status updates\n      player.addListener('player_state_changed', state => { console.log(state); });\n    \n      // Ready\n      player.addListener('ready', ({ device_id }) => {\n        console.log('Ready with Device ID', device_id);\n      });\n    \n      // Not Ready\n      player.addListener('not_ready', ({ device_id }) => {\n        console.log('Device ID has gone offline', device_id);\n      });\n    \n      // Connect to the player!\n      player.connect();\n    }"));t.appendChild(n),document.body.appendChild(t)}}]),a}(n.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"login"},c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"card",id:"carta"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h1",null,c.a.createElement("b",null," ",c.a.createElement(d.a,{id:"Sign In"})))),c.a.createElement("div",{className:"card-body"},c.a.createElement("a",{className:"styledLink",href:"/login"},c.a.createElement("span",null,c.a.createElement("button",{className:"btn float-right login_btn"},c.a.createElement("i",{className:"fab fa-spotify sptIcon"}," ",c.a.createElement(d.a,{id:"Connect using spotify"}))))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"d-flex justify-content-center links"},c.a.createElement(d.a,{id:"Don't have an account? "})," ",c.a.createElement("span",{className:"link",onClick:this.redirectToSpotify}," ",c.a.createElement(d.a,{id:"Sign Up"})))))))))}},{key:"redirectToSpotify",value:function(){window.open("https://www.spotify.com/","_blank")}}]),a}(n.Component),N=t(15),k=t(32),S=t.n(k),j=t(33),O=t.n(j),C=t(34),w=t(35);if("es-ES"===(navigator.language||navigator.userLanguage)){Object(d.c)(S.a),l.a.render(c.a.createElement(d.b,{locale:"es-ES",messages:C},c.a.createElement(N.a,null,c.a.createElement(h.a,{exact:!0,path:"/",component:g}),c.a.createElement(h.a,{path:"/menu/:accessToken",component:f}))),document.getElementById("root"))}else{Object(d.c)(O.a),l.a.render(c.a.createElement(d.b,{locale:"en",messages:w},c.a.createElement(N.a,null,c.a.createElement(h.a,{exact:!0,path:"/",component:g}),c.a.createElement(h.a,{path:"/menu",component:f}))),document.getElementById("root"))}}},[[36,1,2]]]);
//# sourceMappingURL=main.c40296d4.chunk.js.map