const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const productsRoutes = require('./routes/products');

//settings
app.set('json spaces', 4);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/products', productsRoutes);


//Static files

//start server
app.listen(3000, ()=>{
    console.log('server on port', 3000);
});