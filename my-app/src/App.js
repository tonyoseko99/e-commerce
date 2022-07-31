import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Items from './components/Items';
import Item from './components/Item';
import Footer from './components/Footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="root">
      <Navbar />
      <Home />
      
      <Footer />
    </div>
  );
}

export default App;
