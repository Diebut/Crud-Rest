const morgan = require('morgan'); // para mostrar por consola los get-put-delete-update
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const usuariosRoutes = require('./routes/usuarios');

//settings
app.set('json spaces', 4);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/usuarios', usuariosRoutes);


//Static files

//start server
app.listen(3000, ()=>{
    console.log('server on port', 3000);
});