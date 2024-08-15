import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows";
import Contact from "./components/Contact";
import About from "./components/About";
import Payment from "./components/Payment";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </Router>
);

export default App;
