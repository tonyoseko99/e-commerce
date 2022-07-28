import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Items from './components/Items';
import Item from './components/Item';
import Footer from './components/Footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const url = 'https://tonyoseko99.github.io/json-api/db.json';
  const [items, setItems] = useState([]);

  // fetch data from the API to populate on the homepage
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(response => setItems(response.products))
  }, []);

  return (
    <div className="root">
      <Navbar items={items}/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home items={items} />} />
          <Route  exact path='/items' element={<Items />} />
          <Route exact path='/item' element={<Item />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
