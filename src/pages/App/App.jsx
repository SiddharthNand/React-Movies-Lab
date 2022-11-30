import './App.css';
import { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom'
import ActorListPage from '../ActorListPage/ActorListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import NavBar from '../../Components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState("null")

  console.log(user)
  return (
    <div className="App">
     

      {user ? 
      <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MovieListPage />} />
        <Route path='/Movies' element={<MovieListPage />} />
        <Route path='/Actors' element={<ActorListPage />} />
        <Route path='/movies/movieTitle' element={<MovieDetailPage />} />
      </Routes> </>
      : <LoginPage />}
      
    </div>
  );
}

