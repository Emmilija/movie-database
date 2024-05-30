import './assets/styles/scss/style.scss';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from './pages/Favorites';
import Searched from './pages/Searched';
import Layout from './layout/MainLayout';
import Home from './pages/Home/Home';
import MovieDetailsLayout from './pages/Home/MovieDetailLayout';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Layout />
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetailsLayout />} />
        <Route path="/searched" element={<Searched />} />
           <Route path="/favorites" element={<Favorites />} />
           <Route path="/login" element={<Login />} />
   
   
    </Routes>
  </BrowserRouter>
);
}

export default App;
