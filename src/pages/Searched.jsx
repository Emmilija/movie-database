import '../assets/styles/scss/style.scss'
import { useSelector } from 'react-redux';

function Searched() {
    const searched = useSelector(state => state.searched);
    return(
       < div className='container'>
    
        <div className="box">
            <h1>Searched Movies</h1>
            {searched.map((search, index) => (
                <div key={index}>
                    <h2>You searched for: {search.query}</h2>
                    <div className='movies-list'>
                        {search.movies.map((movie) => (
                            <div key={movie.imdbID} className='movie-item'>
                                <h3>{movie.Title}</h3>
                                <p>({movie.Year})</p>
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Searched;