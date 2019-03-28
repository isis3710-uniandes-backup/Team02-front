var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

//MARIO WORK 2.2 START

/* GET cancion especifica por nombre. */
router.get('/buscar/:nombre', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var nombre = req.params.nombre;
            // procedure Statement in sql RECOMENDADO POR EL MISMISIMO KOPETE AUTENTICACION TOKENS SSL
            db.get(`SELECT * FROM cancion WHERE nombre = ?`,[nombre], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('La cancion con nombre ' + req.params.nombre + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});


/* GET cancion random para im feeling lucky. */
router.get('/random', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            db.all(`SELECT * FROM cancion ORDER BY RANDOM() LIMIT 1`, function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('No fue posible encontrar la cancion radom');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});
//MARIO WORK 2.2 END


//MARIO WORK 2.1 START

/* GET todos las canciones. */
router.get('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.all(`SELECT * FROM cancion`, function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El cancion con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

//MARIO WORK 2.1 END




/* GET cancion especifica. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM cancion WHERE id = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('La cancion con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

/* POST cancion. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var cancion = req.body;
            //MARIO WORK 2.0 añado el atributo idAlbum al momento de crear la cancion
            db.run(`INSERT INTO cancion(nombre,duracion,visitas,audio, idAlbum) VALUES(?,?,?,?,?)`,
                [cancion.nombre, cancion.duracion, cancion.visitas, cancion.audio, cancion.idAlbum], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva cancion con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});

//MARIO WORK 2.0 START

/* POST añadir cancion a una playlist. */
router.post('/:idCancion/anadiraplaylist/:idPlaylist', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var idCancion = +req.params.idCancion;
            var idPlaylist = +req.params.idPlaylist;
            db.run(`INSERT INTO cancionesPlaylist (idCancion,idPlaylist) VALUES(?,?)`,
                [idCancion, idPlaylist], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva cancion con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});

//MARIO WORK 2.0 END


/* PUT cancion. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var cancion = req.body;
            var id = req.params.id;
            db.run(`UPDATE cancion SET nombre = ?, duracion = ?, visitas = ?, audio = ? WHERE id = ?`,
                [cancion.nombre, cancion.duracion, cancion.visitas, cancion.audio, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la cancion con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE cancion. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM cancion WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la cancion ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;