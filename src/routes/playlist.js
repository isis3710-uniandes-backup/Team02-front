var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET playlist especifico. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM playlist WHERE id = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El playlist con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

//MARIO WORK 2.0 START

/* GET canciones de playlist especifica. */
router.get('/:id/canciones', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.all(`SELECT  id, nombre, duracion, audio, idAlbum, visitas  FROM cancion, cancionesPlaylist WHERE cancionesPlaylist.idCancion == cancion.id AND cancionesPlaylist.idPlaylist = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El playlist con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

//MARIO WORK 2.0 END

/* POST playlist. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var playlist = req.body;
            //MARIO WORK 2.0 añado el atributo idUsuario al momento de crear la playlist
            db.run(`INSERT INTO playlist(nombre,tipo,duracion,idUsuario ) VALUES(?,?,?,?)`,
                [playlist.nombre, playlist.tipo, playlist.duracion, playlist.idUsuario], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva playlist con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});



/* PUT playlist. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var playlist = req.body;
            var id = req.params.id;
            db.run(`UPDATE playlist SET nombre = ?, tipo = ?, duracion = ? WHERE id = ?`,
                [playlist.nombre, playlist.tipo, playlist.duracion, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la playlist con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE playlist. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM playlist WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la playlist ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;