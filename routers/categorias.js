const express = require('express');
const routerCategoria = express.Router();
const categorias = require('../datos/db_categorias');

//middleware
routerCategoria.use(express.json());

// obtener productos
routerCategoria.get('/',(req,res)=>{
    res.send(categorias)
});


module.exports = routerCategoria;