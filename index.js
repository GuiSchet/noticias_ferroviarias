import express from 'express'
import db from './config/db.js'

//crear la app...
const app = express()


// conexion a la base de datos.
try {
    await db.authenticate();
    console.log('conexion correcta a la base de datos.')
} catch (error){
    console.log(error);
}

//definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
});