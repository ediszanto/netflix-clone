const API_KEY = "307c4bd37b38ea91bd2db1ad5edd6ce3";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_geners=10402`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
}

export default requests;


