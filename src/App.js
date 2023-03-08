import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites'
import Navbar from './components/Navbar';

const App = () => {
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

  // useEffect(() => {
	// 	const movieFavourites = JSON.parse(
	// 		localStorage.getItem('react-movie-app-favourites')
	// 	);

	// 	setFavourites(movieFavourites);
  // }, []);
  
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
  
	return (
		<div className='container-fluid movie-app'>
			<div className='mb-4'>
				<Navbar />
			</div>
			<div className='flex-column d-flex align-items-center justify-content-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='container d-flex flex-wrap justify-content-center'>
				<MovieList movies={movies} favouriteComponent={AddFavourites}	handleFavouritesClick={addFavouriteMovie}/>
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
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

export default App;