import Parser from 'rss-parser';
const parser = new Parser();

async function obtenerNoticiasDesdeRSS(url) {
  try {
    // Parsear el feed RSS
    const feed = await parser.parseURL(url);

    // Guardar las noticias en una variable
    const noticias = feed.items.map(item => {
      return {
        titulo: item.title,
        enlace: item.link,
        descripcion: item.contentSnippet,
        imagen: item.enclosure,
        fechaPublicacion: item.isoDate
      };
    });

    // Hacer algo con las noticias (en este ejemplo, simplemente imprimirlas)
    console.log(noticias);

    // Puedes devolver las noticias si lo necesitas en otro lugar de tu código
    return noticias;
  } catch (error) {
    console.error('Error al obtener noticias desde el feed RSS:', error);
    return [];
  }
}

// Ejemplo de uso
//const urlRSS = 'https://www.telam.com.ar/rss2/ultimasnoticias.xml';
//const urlRSS = 'https://www.perfil.com/feed';
//const urlRSS = 'https://www.clarin.com/rss/lo-ultimo/';
//obtenerNoticiasDesdeRSS(urlRSS);

const urlRSS = ['https://www.telam.com.ar/rss2/ultimasnoticias.xml',
                'https://www.perfil.com/feed',
                'https://www.clarin.com/rss/lo-ultimo/'
                ];

const pepito = async () => {
    for (const item in urlRSS) {
        await obtenerNoticiasDesdeRSS(urlRSS[item]);
    };
};

pepito();