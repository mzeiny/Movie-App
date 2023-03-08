import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import RemoveFavourites from '../components/RemoveFavourites'



const Favorites = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);
  
  
  
      const getMovieRequest = async () => {
          const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=ffd89271`;
  
          const response = await fetch(url);
          const responseJson = await response.json();
  
          if (responseJson.Search) {
              setMovies(responseJson.Search);
          }
    };
  
    useEffect(() => {
          getMovieRequest(searchValue);
      }, [searchValue]);
    
    const saveToLocalStorage = (items) => {
          localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };
    
    const addFavouriteMovie = (movie) => {
          const newFavouriteList = [...favourites, movie];
          setFavourites(newFavouriteList);
    };
  
    const removeFavouriteMovie = (movie) => {
          const newFavouriteList = favourites.filter(
        (favourite) => favourite.imdbID !== movie.imdbID
        
          );
  
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
  
    };
    
    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		setFavourites(movieFavourites);
  }, []);

      return (
          <div className='container-fluid movie-app'>
        <div className='flex-column d-flex align-items-center justify-content-center mt-4 mb-4'>
                  <MovieListHeading heading='Favourites' />
              </div>
        <div className='row'>
                  <MovieList
                      movies={favourites}
                      handleFavouritesClick={removeFavouriteMovie}
                      favouriteComponent={RemoveFavourites}
                  />
              </div>
          </div>
      );
  };
  
  export default Favorites;