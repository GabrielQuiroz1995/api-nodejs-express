const express = require('express');
const app = express();

//Routers
const routerProductos = require('./routers/productos')
app.use('/productos',routerProductos);

const routerCategoria = require('./routers/categorias')
app.use('/categorias',routerCategoria);

// Routing 
// metodo que vamos a manejar
app.use('/*',(req,res)=>{
    res.status(404).send('Endpoint')
})

// process.env.PORT= se utiliza al momento de subir nuestra aplciaicon al servidor se le otorge a la variable el valor entregado por el servidor
const PUERTO = process.env.PORT || 4000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});