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
const urlRSS = 'https://www.telam.com.ar/rss2/ultimasnoticias.xml';
obtenerNoticiasDesdeRSS(urlRSS);
