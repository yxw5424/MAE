import React from 'react';
import Header from "./Home/Header";
import Partners from "./Home/Partners";
import Brief from './Home/Brief';
import Expertise from './Home/Expertise';
import CaseStudy from './Home/CaseStudy';

const Home = () => {
    return(
        <div>
            <Header/>
            <Partners/>
            <Brief/>
            <CaseStudy/>
            <Expertise/>
        </div>
    )
}

export default Home;