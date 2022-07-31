import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState(items);
  const [loading, setLoadng] = useState(false);
  const url = "https://tonyoseko99.github.io/json-api/db.json";

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(response => setItems(response.products))
  }, []);

  return (
    <div className="root">
      <Navbar />
      <Home items={items}/>
      <Footer />
    </div>
  );
}

export default App;
