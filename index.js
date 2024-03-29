import express from 'express'
import db from './config/db.js'
import { guardarNoticia, guardarTodasNoticias } from './controllers/noticiasController.js';
import { obtenerNoticiasDesdeURLs, palabrasClave, urlsRSS } from './rssData/rss.js';
import usuarioRoutes from './routes/usuarioRoutes.js'

//crear la app...
const app = express()

//habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

//carpeta publica
app.use(express.static('public'))

//middleware
app.use('/', usuarioRoutes)

// conexion a la base de datos.
try {
    await db.authenticate();
    db.sync();
    console.log('conexion correcta a la base de datos.')
} catch (error){
    console.log(error);
}

//definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
});

// filtro y guarda de noticias en la BD cada 2 horas...
const filtroGuarda = async () => {
    const todasNoticias = await obtenerNoticiasDesdeURLs(urlsRSS, palabrasClave);
    await guardarTodasNoticias(todasNoticias);
};

const intervalo = 2 * 60 * 60 * 1000; // 2 horas en milisegundos
setInterval(() => {
  filtroGuarda();
}, intervalo);
