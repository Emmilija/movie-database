import '../assets/styles/scss/style.scss'
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';



function Favorites() {
    const favorites = useSelector((state) => state.favorites);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate();

    const handleCardClick = (movie) => {
        navigate(`/movies/${movie.imdbID}`, { state: { movie } });
    };



    return (
        <div className="container">
            <div className="box">
                {isLoggedIn ? (
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
                ) : (
              <h1>First login to see your favorites movies</h1>
                )}
            </div>
        </div>
    );
}

export default Favorites;