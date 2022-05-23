import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home, Movies, Series } from './pages';
import { Footer } from './components/Footer/Footer';

export const AppRouter = () => {
  return (
    <div className="bg-darken text-gray-200">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<Series />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};
