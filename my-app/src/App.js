import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  const [items, setItems] = useState([]);
  const url = "https://tonyoseko99.github.io/json-api/db.json";

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(response => setItems(response.products))
  }, []);

  return (
    <div className="root">
      <Home items={items} />
      <Footer />
    </div>
  );
}

export default App;
