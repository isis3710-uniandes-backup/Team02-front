var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// //MARIO WORK START
// var generoRouter = require('./routes/genero');
// var anuncioRouter = require('./routes/anuncio');
// var radioRouter = require('./routes/radio');
// //MARIO WORK END

// //NICOLAS WORK START
// var cancionRouter = require('./routes/cancion');
// var albumRouter = require('./routes/album');
// var artistaRouter = require('./routes/artista');
// //NICOLAS WORK END

// //JAVIER WORK START
var usuarioRouter = require('./routes/usuario');
// var playlistRouter = require('./routes/playlist');
// var calificacionRouter = require('./routes/calificacion');
// //JAVIER WORK END


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// //MARIO WORK START
// app.use('/genero',generoRouter);
// app.use('/anuncio',anuncioRouter);
// app.use('/radio',radioRouter);
// //MARIO WORK END

// //NICOLAS WORK START
// app.use('/logged/cancion',cancionRouter);
// app.use('/logged/album',albumRouter);
// app.use('/logged/artista',artistaRouter);
// //NICOLAS WORK END

// //JAVIER WORK START
 app.use('/',usuarioRouter);
// app.use('/logged/playlist',playlistRouter);
// app.use('/logged/calificacion',calificacionRouter);
// //JAVIER WORK END

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
