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
    const fechaHoy = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD

    for (const noticia of listaNoticias) {
        if (noticia.puntaje > 0 && noticia.fechaPublicacion && noticia.fechaPublicacion.startsWith(fechaHoy)) {
            console.log(noticia);
            try {
                await guardarNoticia(
                    noticia.titulo, 
                    noticia.enlace, 
                    noticia.descripcion, 
                    noticia.imagen,
                    noticia.fechaPublicacion,
                    noticia.puntaje
                );
            } catch (error) {
                console.error('Error al guardar noticia en servidor: ', error);
            }
        }
    }
};

export {guardarNoticia, guardarTodasNoticias}
