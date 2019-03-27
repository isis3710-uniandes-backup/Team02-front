var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET calificacion especifico. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM calificacion WHERE id = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El calificacion con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

/* POST calificacion. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var calificacion = req.body;
            db.run(`INSERT INTO calificacion(calificacion,comentario) VALUES(?,?)`,
                [calificacion.calificacion, calificacion.comentario], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva calificacion con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});

/* PUT calificacion. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var calificacion = req.body;
            var id = req.params.id;
            db.run(`UPDATE calificacion SET calificacion = ?, comentario = ?, frecuencia = ?, FM = ? WHERE id = ?`,
                [calificacion.calificacion, calificacion.comentario, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la calificacion con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE calificacion. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM calificacion WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la calificacion ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;