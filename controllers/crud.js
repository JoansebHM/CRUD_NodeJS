const conexion = require('../database/db');

exports.save = (req, res) => {
    const Nombre = req.body.Nombre;
    const Correo = req.body.Correo;
    const Celular = req.body.Celular;
    const Edad = req.body.Edad;
    const Genero = req.body.Genero;
    conexion.query('INSERT INTO usuario SET ?', {
        Nombre: Nombre,
        Correo: Correo,
        Celular: Celular,
        Edad: Edad,
        Genero: Genero
     }, (err) => {
        if (err){
            throw err
        }
        res.redirect('/usuario')
     })
}

exports.update = (req, res)=>{
    const IdUsuario = req.body.IdUsuario
    const Nombre = req.body.Nombre;
    const Correo = req.body.Correo;
    const Celular = req.body.Celular;
    const Edad = req.body.Edad;
    const Genero = req.body.Genero;
    conexion.query('UPDATE usuario SET ? WHERE IdUsuario = ?', [{
        Nombre: Nombre,
        Correo: Correo,
        Celular: Celular,
        Edad: Edad,
        Genero: Genero},
        IdUsuario
    ], (err)=>{
        if (err){
            throw err
        }
        res.redirect('/usuario')
    })
}