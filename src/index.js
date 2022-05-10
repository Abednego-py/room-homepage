import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Slider2 from './components/Slider2';
import Footer from './components/Footer';
import Slider1 from './components/Slider1';
import Slider3 from './components/Silder3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/slider2' element={<Slider2 />} />
      <Route path='/slider1' element={<Slider1 />} />
      <Route path='/slider3' element={<Slider3 />} />
    </Routes>
    <Footer />
  </Router>

);



