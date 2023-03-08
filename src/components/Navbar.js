import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  <a className="navbar-brand mb-4" href="#">Movie-App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link mb-4">Movies<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link mb-4">Tv Series</a>
      </li>
      <li className="nav-item">
        <a className="nav-link mb-4">Favourites</a>
      </li>
    </ul>
  </div>
</nav>
	);
};

export default Navbar;