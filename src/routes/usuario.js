var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

//MARIO WORK 2.1 START

/* GET todos los usuarios . */
router.get('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.all(`SELECT id, loginUsuario, correo, imagen, idioma, premium FROM usuario`, function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El usuario con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

//MARIO WORK 2.1 END



/* GET usuario especifico. */
router.get('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.get(`SELECT * FROM usuario WHERE id = ?`,[id], function (err, row) {
                
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                    
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El usuario con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});

//MARIO WORK 2.0 START

/* GET playlist de usuario especifico. */
router.get('/:id/playlists', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = +req.params.id;
            db.all(`SELECT * FROM playlist WHERE idUsuario = ?`,[id], function (err, row) {
                if (err) {
                    res.status(500).send('El servidor no pudo procesar la solicitud')
                }
                else {
                    if(row === undefined){
                        res.status(404).send('El usuario con URI' + req.originalUrl + ' no existe');
                    }
                    res.send(row);
                }
            });
        }
        db.close();
    });
});
                                                                                                                                         

//MARIO WORK 2.0 END


/* POST usuario. */
router.post('/', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var usuario = req.body;
            db.run(`INSERT INTO usuario(loginUsuario,correo,clave,imagen,idioma,premium) VALUES(?,?,?,?,?,?)`,
                [usuario.loginUsuario, usuario.correo, usuario.clave, usuario.imagen, usuario.idioma, usuario.premium], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl + '/' + this.lastID;
                        res.send('Creación de una nueva usuario con URI ' + uri);
                    }

                });
        }
        db.close();
    });
});


/* PUT usuario. */
router.put('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var usuario = req.body;
            var id = req.params.id;
            db.run(`UPDATE usuario SET loginUsuario = ?, correo = ?, clave = ?, imagen = ?, idioma = ?, premium = ? WHERE id = ?`,
                [usuario.loginUsuario, usuario.correo, usuario.clave, usuario.imagen, usuario.idioma, usuario.premium, id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha actualizado la usuario con ubicado en la URI ' + uri);
                    }
                });
        }
        db.close();
    });
});
/* DELETE usuario. */
router.delete('/:id', function (req, res) {
    var db = new sqlite3.Database('./db/projectDB.db', (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            var id = req.params.id;
            db.run(`DELETE FROM usuario WHERE id = ?`,
                [id], function (err) {

                    if (err){
                         res.status(500).send('El servidor no pudo procesar la solicitud')
                    }
                    else{
                        var uri = req.originalUrl;
                        res.send('Se ha eleminado la usuario ubicada ' + uri);
                    }
                });
        }
        db.close();
    });
});
module.exports = router;