
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
        navigate(-1);
    };
    return (
      <div className="movie-details">
        <div className="icon-back">
          <IoMdArrowRoundBack size={24} onClick={handleBackClick} />
        </div>
        <div className="details-container">
          <div>
            <img alt="movie" src={movie.Poster}></img>
          </div>
          <div className='details'>
            <h2>{movie.Title}</h2>
            <p>Plot: {movie.Plot}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Release Date: {movie.Released}</p>
            <p>Rating: {movie.Rated}</p>
            <p>Duration: {movie.Runtime}</p>
          </div>
        </div>
      </div>
    );
}

export default MovieDetails;