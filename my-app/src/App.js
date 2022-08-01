import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Item from "./components/Item";
import Items from "./components/Items";
function App() {
  return (
    <div className="root">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items/{id}:" element={<Item />} />
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
