import { Link } from 'react-router-dom';

export function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  <Link to="/" className="navbar-brand mb-4" href="#">Movie-App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link mb-4">Movies<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/series" className="nav-link mb-4">Tv Series</Link>
      </li>
      <li className="nav-item">
        <Link to="/favorites" className="nav-link mb-4">Favourites</Link>
      </li>
    </ul>
  </div>
</nav>
    )
    // <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    //     <Container>
    //         <Nav className="me-auto">
    //            <Link to="/">
    //             Movies
    //             </Link>
    //            <Link to="/series">
    //             TV Series
    //             </Link>
    //            <Link to="/favorites">
    //             Favorites
    //             </Link>
    //         </Nav>
            
    //     </Container>
    // </NavbarBs>
}