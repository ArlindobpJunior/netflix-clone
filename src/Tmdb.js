const API_KEY = "1dee80c045b203f42c9d4a71dda2e14e";
const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "language=pt-BR";

/*
Detalhes dos filmes que serão carregados nesse arquivo para serem usados pela aplicação 
- originais da netflix (no site a Netflix aparece como with_network=213)
- recomendados (trending)
- em alta
- acão
- comédia
- terror
- romance
- documentário
 */

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(
          `/trending/all/week?${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
    ];
  },

  // Pega as informações do filme que aparece na capa. Nota, ano, número de episódios e descrição.
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?api_key=${API_KEY}&${LANGUAGE}`
          );
          break;

        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?api_key=${API_KEY}&${LANGUAGE}`
          );
          break;

        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
