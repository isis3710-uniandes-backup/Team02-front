var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET radio especifico. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM radio WHERE id = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El radio con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

/* POST radio. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var radio = req.body;
            db.run(`INSERT INTO radio(nombre,imagen,frecuencia, FM) VALUES(?,?,?,?)`,
                [radio.nombre, radio.imagen, radio.frecuencia, radio.FM], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva radio con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});

/* PUT radio. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var radio = req.body;
            var id = req.params.id;
            db.run(`UPDATE radio SET nombre = ?, imagen = ?, frecuencia = ?, FM = ? WHERE id = ?`,
                [radio.nombre, radio.imagen, radio.anio, radio.FM, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la radio con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE radio. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM radio WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la radio ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;