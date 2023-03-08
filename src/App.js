import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Series } from './pages/Series';
import Favorites from './pages/Favorites';
import { Navbar } from './components/Navbar';
import Movies from './pages/Movies';

function App() {
	return (
		<Router>
	   <div className="App">
		 <>
		   <Navbar />
			 <Routes>
			   <Route path="/" element={<Movies />}/>
			   <Route path="/series" element={<Series />}/>
			   <Route path="/favorites" element={<Favorites />}/>
			 </Routes>
		 </>
	   </div>
	   </Router>
	 )
   }
   
   export default App;
   