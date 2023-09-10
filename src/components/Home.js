import React from 'react';
import Header from "./Header";
import Partners from "./Partners";
import Brief from './Brief';
import Footer from './Footer';
import Expertise from './Expertise';
import CaseStudy from './CaseStudy';
const Home = () => {
    return(

        <div >
            <Header/>
            <Partners/>
            <Brief/>
            <CaseStudy/>
            <Expertise/>
            <Footer/>
        </div>
    )

}

export default Home;