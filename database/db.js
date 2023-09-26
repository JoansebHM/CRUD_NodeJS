const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asignacion_citas'
})

conexion.connect((err) =>{
    if (err){
        console.log(`algo salio mal ${err}`)
    }
    console.log('conectado')
})

module.exports = conexion;