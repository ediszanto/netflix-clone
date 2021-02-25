import axios from "axios";

// base url to make requests to the movie database
// it works when we have to do a lot of requests
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;