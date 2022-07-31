import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
function App() {

  const [items, setItems] = useState([]);
  const url = "https://tonyoseko99.github.io/json-api/db.json";

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(response => setItems(response.products))
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home items={items}/>} />
      </Routes>
    </Router>
  );
}

export default App;
