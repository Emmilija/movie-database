import React from 'react';
import { Outlet } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';

function MovieDetailsLayout() {
    return (
        <div className="details-layout">
   
            <div className="card-section">
            <MovieDetails />
            </div>
            <div className="details-section">
                <Outlet />
            </div>
        </div>
    );
}

export default MovieDetailsLayout;