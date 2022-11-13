const express = require('express');
const routerProductos = express.Router();
const productos = require('../datos/db_productos');

//middleware
routerProductos.use(express.json());

// obtener productos
routerProductos.get('/',(req,res)=>{
    res.send(productos)
});

//Busqueda de nuestro producto por categoria
routerProductos.get('/:id',(req,res)=>{
    const id = req.params.id;
    const resultados = productos.filter(producto => producto.category == id)
    if(resultados.length === 0){
        return res.status(404).send(`No existe la categoria que buscas`)
    }
    res.send(resultados)
});

module.exports = routerProductos;
