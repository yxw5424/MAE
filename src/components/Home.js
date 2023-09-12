import React from 'react';
import Header from "./Header";
import Partners from "./Partners";
import Brief from './Brief';
import Expertise from './Expertise';
import CaseStudy from './CaseStudy';

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