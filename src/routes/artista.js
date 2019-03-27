var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET artista especifico. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM artista WHERE id = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El artista con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});


//MARIO WORK 2.0 START

/* GET albumes de artista especifico. */
router.get('/:id/albumes', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.all(`SELECT * FROM album WHERE idArtista = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El artista con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

//MARIO WORK 2.0 END

/* POST artista. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var artista = req.body;
            db.run(`INSERT INTO artista(nombre,imagen,bio,pais) VALUES(?,?,?,?)`,
                [artista.nombre, artista.imagen, artista.bio, artista.pais], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva artista con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});

/* PUT artista. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var artista = req.body;
            var id = req.params.id;
            db.run(`UPDATE artista SET nombre = ?, imagen = ?, bio = ?, pais = ? WHERE id = ?`,
                [artista.nombre, artista.imagen, artista.bio, artista.pais, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la artista con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE artista. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM artista WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la artista ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;