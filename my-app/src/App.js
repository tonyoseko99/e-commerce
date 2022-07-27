import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Items from './components/Items';
import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  const url = 'https://tonyoseko99.github.io/json-api/db.json';
  const [items, setItems] = useState([]);

  // fetch data from the API to populate on the homepage
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(response => setItems(response.products))
  }, []);

  // search data
  const [searchData, useSearchData] = useState(items);
  function handleFormSubmit(event){
    event.preventDefault();
    searchData(items);
  }

  return (
    <div className="root">
      <Navbar />
      <Home items={items} />
      <Footer />
    </div>
  );
}

export default App;
