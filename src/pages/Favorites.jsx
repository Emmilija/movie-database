import '../assets/styles/scss/style.scss'
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';



function Favorites() {
    const favorites = useSelector((state) => state.favorites);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate();
    console.log("Is Logged In:", isLoggedIn);  // Debug log
    console.log("Favorites:", favorites);  // Debug log

    const handleCardClick = (movie) => {
        navigate(`/movies/${movie.imdbID}`, { state: { movie } });
    };



    return (
        <div className="container">
            <div className="box">
              
                    <>
                        <h1>Favorites</h1>
                        <div className='movies-list'>
                            {favorites.map((movie) => (
                                <Card key={movie.imdbID} style={{ width: 300, height: 550 }} onClick={() => handleCardClick(movie)}>
                                    <div className='movie-title'>
                                        <h3>{movie.Title}</h3>
                                    </div>
                                    <p className='movie-year'>({movie.Year})</p>
                                    <img src={movie.Poster} alt={movie.Title} style={{ width: 240 }} />
                                </Card>
                            ))}
                        </div>
                    </>
             
              
            </div>
        </div>
    );
}

export default Favorites;