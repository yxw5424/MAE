import React from 'react';
import { Container,Row,Col } from 'reactstrap';

// import Header from "./Header";

const About = () => {
    return(
        
        <div className='my-ContentContainer'>
           
            <Container>
                <Row>
                <Col xs='12' md='5'>
                <header className='my-Header' style={{marginTop:'5vh', marginBottom:'5vh'}}>
                    ABOUT US
                </header>
                <p className='my-paragraph'>
                Our team is committed to design and manufacture metering systems in the oil and gas industry, providing users with the most professional and optimized integrated solutions. Utilizing our experience, we can continuously meet all kinds of customers’ metering requirements. 

We focus on the metering testing and equipment manufacturing in energy, oil, gas, and environmental protection industries. Our products are wildly used in liquid oil and chemical products, low temperature liquefied gas, high pressure wellhead multiphase flow and other scenes.
As the provider of software and hardware of metering solutions, MAE designs and produces intelligent metering systems. Through scientific and technological innovation, MAE guides the modularization, intelligence and informatization of the products to advance the development of advanced metering technology. Through verifiable metering, MAE provides customers with optimized, safest, and most accurate integrated metering solutions. Furthermore, we also provide customers with customized design and services, and devote to become the leader of integrated metering solutions.
                </p>
                </Col>
                <Col xs='0' md='2'>
                </Col>
                <Col xs='12' md='5' className="row align-items-end" >
                    
                    <Row >
                        
                        <Col  >
                            <header className='my-Subject'>Company values:</header>
                            <p className='my-paragraph'> At our company, unwavering commitment to quality stands as the cornerstone of our ethos. We pledge to stand resolutely by our valued customers during times of adversity, ensuring their needs are met with unwavering dedication. With a sophisticated and advanced management approach, we assure the utmost efficiency in the execution of our projects, consistently delivering exceptional results that reflect our steadfast commitment to excellence.</p>
                            
                        </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
        </div>
    )

}

export default About;