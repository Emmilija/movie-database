
import React from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../assets/styles/scss/style.scss'
import { IoMdArrowRoundBack } from "react-icons/io";
const apiKey = 'ee8c988b';

function MovieDetails(

) {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(location.state?.movie || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
            const data = await response.json();
            setMovie(data);
            setLoading(false);
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }
    const handleBackClick = () => {
        navigate(-1); // This navigates back to the previous page
    };
    return (
        <div className='movie-details'>
                     <IoMdArrowRoundBack   onClick={handleBackClick}/>
                     <div>
                        <img alt='movie' src={movie.Poster}></img>
                     </div>
                     <div>
                     <h2>{movie.Title}</h2>
            <p>Plot: {movie.Plot}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Release Date: {movie.Released}</p>
    <p>Rating: {movie.Rated}</p>
    <p>{movie.Runtime}</p>
                     </div>
         
        </div>
    );
}

export default MovieDetails;