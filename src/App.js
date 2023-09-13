import './App.css';
import './custom.css';
import React from 'react';
import AppNavbar from './components/Navbar';
import {  Route,  Routes, Link, ScrollRestoration } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Footer from './components/Footer';
import Contact from './components/Contact';
import CaseOne from './components/CaseStudies/CaseOne';
import CaseTwo from './components/CaseStudies/CaseTwo';
import CaseThree from './components/CaseStudies/CaseThree';
import ProductPage from './components/Products/ProductPage';
import ServicePage from './components/Services/ServicePage';
import productsData from './Products.json'; 
import servicesData from './Services.json';

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
        {
          productsData.map((product,index)=>{
            return(
            
            <Route id={product.id} exact path={product.path} element={<ProductPage product={product} />} />
            )
          })
        }
         {
          servicesData.map((service,index)=>{
            return(
            
            <Route id={service.id} exact path={service.path} element={<ServicePage service={service} />} />
            )
          })
        }
        
        

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
