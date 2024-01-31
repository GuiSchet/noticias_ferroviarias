import dbNoticias from '../models/dbnoticias.js'
import { leerTodasNoticias } from './noticiasController.js'

//const formularioLogin = (req, res) => {
//    res.render('auth/login', {
//        pagina: 'Iniciar Sesión'
//    })
//}

const paginaPpal = async (req, res) => {
    const noticias = await leerTodasNoticias();
    res.render('layout/index', {
        noticias: noticias
    })
}


export {
    paginaPpal
}