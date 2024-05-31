import {useEffect, useState} from 'react'
import '../../assets/styles/scss/style.scss'
import {Card, message} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import {addFavorites, removeFavorite} from '../../redux/favoritesSlice';
import {addSearched} from '../../redux/searchedSlice';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { fetchMovies } from '../../redux/moviesSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [page, setPage] = useState(1);

    // eslint-disable-next-line
    const [searchQuery, setSearchQuery] = useState('');
        // eslint-disable-next-line
const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const { movies, status, error, totalResults} = useSelector((state) => state.movies);
  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const favorites = useSelector((state) => state.favorites);

 

    useEffect(() => {
    dispatch(fetchMovies({ page, query: 'searchQuery' }));
  }, [dispatch, page]); 

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;


  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    setSearchQuery(query);
    setPage(1);
    try {
        const resultAction = await dispatch(fetchMovies({ query, page: 1 }));
        
        if (resultAction.meta.requestStatus === 'fulfilled') {
            dispatch(addSearched({ query, movies: resultAction.payload.movies }));
        }
    } catch (error) {
        console.error('Error dispatching search action:', error);
    }
};
    




const handleNextPage = () => {
    if (page < totalPages) {
        dispatch(fetchMovies({ query: '', page: page + 1 }));
        setPage(page + 1);
        window.scrollTo(0, 0);
    }
};

const handlePrevPage = () => {
    if (page > 1) {
        dispatch(fetchMovies({ query: '', page: page - 1 }));
        setPage(page - 1);
        window.scrollTo(0, 0);
    }
};


    const handleCardClick = (movie) => {
        navigate(`/movies/${movie.imdbID}`, { state: { movie } });
    };

    const toggleFavorite = (movie) => {
       
        if (favorites.find(fav => fav.imdbID === movie.imdbID)) {
            dispatch(removeFavorite(movie.imdbID));
        } else {
            dispatch(addFavorites(movie));
            message.success(`${movie.Title} added to favorites`);
        }
    };
    return(
        <div className='container'>
          <div className='box'>
          <h2>Search your favorite movies and series </h2>
        <form onSubmit={handleSearch} >
            <input type="text" name="search" placeholder="Search movies..." />
            <button type="submit">Search</button>
        </form>
        <div>
           
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='movies-list'>
                    {movies.map((movie) => (
                        
                        <Card key={movie.imdbID} style={{
                            width: 300, height: 550,
                          }} >
                         <div className='movie-title'>
                      <div>
                      {favorites.find(fav => fav.imdbID === movie.imdbID) ? (
                                            <FaHeart size={22} onClick={() => toggleFavorite(movie)} style={{ color: 'red' }} />
                                        ) : (
                                            <FaRegHeart onClick={() => toggleFavorite(movie)} size={22} />
                                        )}
                      </div>
                    
                           <div>
                           <h3>{movie.Title}</h3>
                            </div>            
      
              
            </div>

                            <p className='movie-year'>({movie.Year})</p>
                            <img src={movie.Poster} alt={movie.Title} style={{ width: 240, marginBottom: 10 }}  onClick={() => handleCardClick(movie)} />
                        </Card>
                     
                    ))}
                </div>
            )}
            {totalResults > 0 && (
                <div>
                    <button className='styled-button' onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                    <button className='styled-button' onClick={handleNextPage} disabled={(page) >= totalPages}>Next</button>
                </div>
            )}
        </div>
    </div>
   
    </div> 
);
}


export default Home;