import Parser from 'rss-parser';
const parser = new Parser();

async function obtenerNoticiasDesdeURLs(urls, palabrasClave) {
  const todasLasNoticias = [];

  for (const url of urls) {
    try {
      const feed = await parser.parseURL(url);

      const noticias = feed.items.map(item => {
        return {
          titulo: item.title,
          enlace: item.link,
          descripcion: item.contentSnippet,
          fechaPublicacion: item.isoDate
        };
      });

      // Filtrar noticias basadas en palabras clave en la descripción
      const noticiasFiltradas = noticias.filter(noticia => {
        const descripcion = noticia.descripcion.toLowerCase();
        const palabrasClaveEncontradas = palabrasClave.filter(palabra =>
          descripcion.includes(palabra.toLowerCase())
        );

        // Agregar la key "puntaje" al diccionario de la noticia
        noticia.puntaje = palabrasClaveEncontradas.length;

        return palabrasClaveEncontradas.length > 0;
      });

      todasLasNoticias.push(...noticiasFiltradas);

    } catch (error) {
      console.error(`Error al obtener noticias desde el feed RSS (${url}):`, error);
    }
  }

  // Hacer algo con todas las noticias (en este ejemplo, simplemente imprimirlas)
  //console.log(todasLasNoticias);

  // Puedes devolver todas las noticias si lo necesitas en otro lugar de tu código
  return todasLasNoticias;
}


// Ejemplo de uso con una lista de URLs y palabras clave
const urlsRSS = ['https://www.clarin.com/rss/lo-ultimo',
               'https://www.clarin.com/rss/politica', 
               'https://www.clarin.com/rss/mundo', 
               'https://www.clarin.com/rss/sociedad', 
               'https://www.clarin.com/rss/internacional', 
                'https://www.clarin.com/rss/economia',
              'https://www.perfil.com/feed',
              'https://www.perfil.com/feed/politica',
              'https://www.perfil.com/feed/economia',
              'https://www.perfil.com/feed/ciencia',
              'https://www.perfil.com/feed/tecnologia',
              'https://www.telam.com.ar/rss2/ultimasnoticias.xml',
              'https://www.telam.com.ar/rss2/politica.xml',
              'https://www.telam.com.ar/rss2/economia.xml',
              'https://www.telam.com.ar/rss2/sociedad.xml',
              'https://www.telam.com.ar/rss2/internacional.xml',
              'https://www.telam.com.ar/rss2/latinoamerica.xml',
              'https://www.telam.com.ar/rss2/conosur.xml',
              'https://www.telam.com.ar/rss2/provincias.xml',
              'https://www.telam.com.ar/rss2/tecnologia.xml',
              'https://www.enelsubte.com/rss-2/',
              'https://www.ambito.com/rss/pages/economia.xml',
              'https://www.ambito.com/rss/pages/negocios.xml',
              'https://www.ambito.com/rss/pages/nacional.xml',
              'https://www.ambito.com/rss/pages/autos.xml',
              'https://www.ambito.com/rss/pages/ultimas-noticias.xml',
              'https://www.ambito.com/rss/pages/finanzas.xml',
              'https://www.ambito.com/rss/pages/politica.xml',
              'https://www.ambito.com/rss/pages/mundo.xml',
              'https://www.ambito.com/rss/pages/tecnologia.xml',
              'https://www.ambito.com/rss/pages/novedades-fiscales.xml',
              'https://www.pagina12.com.ar/rss/suplementos/rosario12/notas',
              'https://www.pagina12.com.ar/rss/secciones/el-pais/notas',
              'https://www.pagina12.com.ar/rss/secciones/economia/notas',
              'https://www.pagina12.com.ar/rss/secciones/sociedad/notas',
              'https://www.pagina12.com.ar/rss/secciones/el-mundo/notas',
              'https://www.pagina12.com.ar/rss/secciones/universidad/notas',
              'https://www.pagina12.com.ar/rss/secciones/ciencia/notas',
              'https://www.eldestapeweb.com/tag/rrss',
              'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/sociedad/portada',
              'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/internacional/portada',
              'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/economia/portada',
              'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/ciencia/portada',
              'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/tecnologia/portada',
              'https://feeds.elpais.com/mrss-s/list/ep/site/elpais.com/section/clima-y-medio-ambiente',
              'https://feeds.elpais.com/mrss-s/list/ep/site/elpais.com/section/educacion',
              'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/ultimas-noticias/portada',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=12',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=14',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=13',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=15',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=20',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=187',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=43',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=35',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=44',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=181',
              'https://www.laizquierdadiario.com/spip.php?page=backend&id_mot=21',
              'https://www.letrap.com.ar/rss/pages/home.xml',
              'https://www.letrap.com.ar/rss/pages/ciudad.xml',
              'https://www.letrap.com.ar/rss/pages/politica.xml',
              'https://www.letrap.com.ar/rss/pages/conurbano.xml',
              'https://www.letrap.com.ar/rss/pages/municipios.xml',
              'https://www.letrap.com.ar/rss/pages/sociedad.xml',
              'https://www.letrap.com.ar/rss/pages/economia.xml',
              'https://www.letrap.com.ar/rss/pages/judiciales.xml',
              'https://www.letrap.com.ar/rss/pages/medios.xml',
              'https://www.letrap.com.ar/rss/pages/america.xml',
              'https://www.minutoar.com.ar/rss/feed.html?r=3',
              'https://www.minutoar.com.ar/rss/feed.html?r=1',
              'https://www.minutoar.com.ar/rss/feed.html?r=4',
              'https://www.minutoar.com.ar/rss/feed.html?r=5',
              'https://www.minutoar.com.ar/rss/feed.html?r=2',
              'https://www.lapoliticaonline.com/files/rss/politica.xml',
              'https://www.lapoliticaonline.com/files/rss/judiciales.xml',
              'https://www.lapoliticaonline.com/files/rss/ciudad.xml',
              'https://www.lapoliticaonline.com/files/rss/provincia.xml',
              'https://www.lapoliticaonline.com/files/rss/conurbano.xml',
              'https://www.lapoliticaonline.com/files/rss/santafe.xml',
              'https://www.lapoliticaonline.com/files/rss/transporte.xml',
              'https://www.lapoliticaonline.com/files/rss/campo.xml',
              'https://www.lapoliticaonline.com/files/rss/medios.xml'
            ];

const palabrasClave = [
  'ministerio', 'ministerios', 
  'trenes', 'tren', 'trenes', 
  'vias', 'ferrocarril', 'ferroviarios', 
  'vial', 'viales', 'puente', 'puentes',
  'obra', 'obras', 'licitacion', 'licitaciones', 
  'transporte', 'transportes', 
  'ADIF', 'SOFSE', 'ingenieria',
  'ferroviario', 'infraestructura', 'infraestructuras',
  'movilidad', 'logistica', 'construccion', 'desarrollo',
  'planificacion', 'ingeniero', 'concesion', 'desplazamiento'
];
//console.log(urlsRSS)
//obtenerNoticiasDesdeURLs(urlsRSS, palabrasClave);


export {obtenerNoticiasDesdeURLs, palabrasClave, urlsRSS}