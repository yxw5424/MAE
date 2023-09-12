import './App.css';
import './custom.css';
import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Route,  Routes, Outlet, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {

  return (
    <div >
    <AppNavbar  />
    <div className='my-ContentContainer '>
      <Routes>
        <Route index path="/MAE" element={<Home />} />
        <Route path="/MAE/about" element={<About />} />
        <Route path="/MAE/contact" element={<Contact />} />
        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} />
    </Routes>
    <Footer/>

    </div>
  </div>
  );
}







function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
