import dbNoticias from '../models/dbnoticias.js'

const guardarNoticia = async (a, b, c, d, e, f) => {
    const noticia = await dbNoticias.create({
        titulo: a,
        enlace: b,
        descripcion: c,
        imagen: String(d),
        fechaPublicacion: String(e),
        puntaje: f
    });
};

const guardarTodasNoticias = async (listaNoticias) => {
    for (const noticia of listaNoticias) {
        if (noticia.puntaje > 1) {
            console.log(noticia);
        }
    }
}

export {guardarNoticia, guardarTodasNoticias}
