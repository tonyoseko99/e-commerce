import logo from './logo.svg';
import { ReactDOM as BrowserRouter } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([]);

  // fetch data from the API to populate on the homepage
  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(response => setItems(response))
  }, [])

  return (
    <div className="root">
      <Navbar />
      <Home items={items} />
    </div>
  );
}

export default App;
