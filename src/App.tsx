import './App.css';

import Header from 'components/header';
import Home from 'components/pages/home';
import MovieDetails from 'components/pages/movieDetails';
import Footer from 'components/footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from 'components/pages/favorites';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/:movieId" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
