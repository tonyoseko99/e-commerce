import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const url = 'https://tonyoseko99.github.io/json-api/db.json';
  const [items, setItems] = useState([]);

  // fetch data from the API to populate on the homepage
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(response => setItems(response.products))
  }, [])

  // search through the data
  useEffect(()=>{
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    })
  }, [])

  return (
    <div className="root">
      <Navbar items={items} />
      <Home items={items} />
    </div>
  );
}

export default App;
