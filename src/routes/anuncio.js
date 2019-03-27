var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET anuncio especifico. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM anuncio WHERE id = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El anuncio con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

/* POST anuncio. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var anuncio = req.body;
            db.run(`INSERT INTO anuncio(nombre,empresa,video) VALUES(?,?,?)`,
                [anuncio.nombre, anuncio.empresa, anuncio.video], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva anuncio con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});

/* PUT anuncio. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var anuncio = req.body;
            var id = req.params.id;
            db.run(`UPDATE anuncio SET nombre = ?, empresa = ?, video = ? WHERE id = ?`,
                [anuncio.nombre, anuncio.empresa, anuncio.video, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la anuncio con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE anuncio. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM anuncio WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la anuncio ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;