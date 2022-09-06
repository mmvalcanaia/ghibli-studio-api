import './App.css';

import Header from 'components/header';
import Home from 'components/pages/home';
import MovieDetails from 'components/pages/movieDetails';
import Footer from 'components/footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
