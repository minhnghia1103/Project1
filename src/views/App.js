import React from "react";
import Nav from "./navigation/Nav";
import Home from "./home/Home.js";
import About from "./about/About";
import Foot from "./foot/Foot.js";
import Shop from "./shop/Shop";
import Contact from "./contact/Contact.js";
import CardShop from "./cardShop/CardShop";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import Coundown from "./coundown/Coundown";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/getPay" element={<CardShop />} />
      </Routes>

      <Foot />
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </Router>
  );
}

export default App;
