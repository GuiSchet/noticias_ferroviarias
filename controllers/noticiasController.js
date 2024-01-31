import dbNoticias from '../models/dbnoticias.js'

const crearNoticia = async (a, b, c, d, e) => {
    const noticia = await dbNoticias.create({
        titulo: a,
        enlace: b,
        descripcion: c,
        imagen: String(d),
        fechaPublicacion: String(e)
    });
};

