import '../assets/styles/scss/style.scss'
import { useSelector, useDispatch } from 'react-redux';
import { Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import {  removeFavorite } from '../redux/favoritesSlice';

import { FaHeart } from "react-icons/fa";
function Favorites() {
    const favorites = useSelector((state) => state.favorites);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("Is Logged In:", isLoggedIn); 
    console.log("Favorites:", favorites);  

    const handleCardClick = (movie) => {
        navigate(`/movies/${movie.imdbID}`, { state: { movie } });
    };
    const toggleFavorite = (movie) => {
       
        if (favorites.find(fav => fav.imdbID === movie.imdbID)) {
            dispatch(removeFavorite(movie.imdbID));
            message.error(`${movie.Title} removed from favorites`)
        }
    }

    return (
        <div className="container">
            <div className="box">
              
                    <>
                        <h1>Favorites</h1>
                        <div className='movies-list'>
                            {favorites.map((movie) => (
                                <Card key={movie.imdbID} style={{ width: 300, height: 550 }} >
                                    <div className='movie-title'>
                                    <FaHeart onClick={() => toggleFavorite(movie)} style={{ color: 'red' }} />
                                        <h3>{movie.Title}</h3>
                                    </div>
                                    <p className='movie-year'>({movie.Year})</p>
                                    <img src={movie.Poster} alt={movie.Title} style={{ width: 240 }} onClick={() => handleCardClick(movie)} />
                                </Card>
                            ))}
                        </div>
                    </>
             
              
            </div>
        </div>
    );
}

export default Favorites;