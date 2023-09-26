const express = require('express');
const router = express.Router();
const conexion = require('./database/db')

router.get('/citas', (req, res) => {
    res.render('citas');
})

router.get('/doctores', (req, res) => {
    conexion.query('SELECT * FROM doctores', (err, rows) =>{
        if (err){
            throw err;
        }
        res.render('doctores', {rows: rows})
    })
})

router.get('/create_doctor', (req, res) => {
    res.render('create_doctor');
})

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/create', (req, res) => {
    res.render('create');
})

router.get('/usuario', (req, res) => {
    conexion.query('SELECT * FROM usuario', (err, rows) =>{
        if (err){
            throw err;
        }
        res.render('usuario', {rows: rows})
    })
})

router.get('/edit/:IdUsuario', (req, res)=>{
    const IdUsuario = req.params.IdUsuario;
    conexion.query('SELECT * FROM usuario WHERE IdUsuario=?', [IdUsuario], (err, rows) =>{
        if (err){
            throw err;
        }
        res.render('edit', {rows: rows[0]})
    })
})

router.get('/delete/:IdUsuario', (req, res)=>{
    const IdUsuario = req.params.IdUsuario
    conexion.query('DELETE FROM usuario WHERE IdUsuario = ?', [IdUsuario], (err)=>{
        if (err){
            throw err;
        }
        res.redirect('/usuario')
    })
})

const crud = require('./controllers/crud')
router.post('/save', crud.save)
router.post('/edit', crud.update)

module.exports = router;