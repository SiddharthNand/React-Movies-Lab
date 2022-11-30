import './App.css';
import { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom'
import ActorListPage from '../ActorListPage/ActorListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import NavBar from '../../Components/NavBar/NavBar';
import { movies } from '../../data.js';


export default function App() {
  const [user, setUser] = useState('null')

  return (
    <div className='App'>
     

      {user ? 
      <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MovieListPage  movies={movies}/>} />
        <Route path='/Movies' element={<MovieListPage  movies={movies}/>} />
        <Route path='/movies/movieTitle' element={<MovieDetailPage  movies={movies}/>} />
        <Route path='/Actors' element={<ActorListPage  movies={movies}/>} />
      </Routes> </>
      : <LoginPage setUser={setUser} />
      }
      
    </div>
  );
}

