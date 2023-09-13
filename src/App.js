import './App.css';
import './custom.css';
import React from 'react';
import AppNavbar from './components/Navbar';
import {  Route,  Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Footer from './components/Footer';
import Contact from './components/Contact';
import CaseOne from './components/CaseStudies/CaseOne';
import CaseTwo from './components/CaseStudies/CaseTwo';
import CaseThree from './components/CaseStudies/CaseThree';
import { ScrollRestoration } from "react-router-dom";
function App() {

  return (
    <div >
    <AppNavbar  />
    <div className='my-ContentContainer '>
      <Routes>
        <Route   index path="/" element={<Home />} />
        <Route  exact path="/about" element={<About />} />
        <Route  exact path="/contact" element={<Contact />} />
        <Route  exact path="/caseone" element={<CaseOne />} />
        <Route  exact path="/casetwo" element={<CaseTwo />} />
        <Route  exact path="/casethree" element={<CaseThree />} />
        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" component={<NoMatch />} />
        </Routes> 
    

    </div>
    <Footer/>
    <ScrollRestoration />
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
