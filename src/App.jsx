import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PetDetails from './pages/PetDetails/PetDetails';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Confirmation from './components/Confirmation/Confirmation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        {/* Main content of each route */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:breedId" element={<PetDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
