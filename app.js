const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'./public')))

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('./router'))

app.listen(5000, () => {
    console.log('Servidor en puerto 5000');
});