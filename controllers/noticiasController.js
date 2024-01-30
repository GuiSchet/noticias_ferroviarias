import dbNoticias from '../models/dbnoticias.js'

const crearNoticia = async () => {
    const noticia = await dbNoticias.create({
        titulo: 'Vivaperonperonperon'
    });
}

crearNoticia();