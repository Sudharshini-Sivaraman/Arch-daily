import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
