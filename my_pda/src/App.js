// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Homepage from './pages/HomePage';
import Events from './components/Upcomingevents';
import Contact from './pages/Contact';
import Login from './pages/Login';

import Signin from './pages/Signin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
