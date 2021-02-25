import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w500/";

    // a piece of code which runs  based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads and don't run again 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* several row__posters(s) */}

                {movies.map(movie => (
                    <img 
                        key={movie.id} // when lot of information should be rendered uning "key" make everything rendering smoother
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.title} 
                    />
                ))}
            </div>
            {/*  container -> posters */}


        </div>
    )
}

export default Row
