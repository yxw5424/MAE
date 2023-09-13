import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SmartMetering from "../../smart_metering.jpg";
import '../../custom.css';



const Expertise= () => {
    return(

            <Container className="my-Container">

                <header style={{alignSelf:"center",textAlign:"center", marginBottom:"2vh"}} className='my-Subject'>
                    Our Team
                </header>   
                    
                <Row  md="expand">
                    <Col style={{alignSelf:'center'}}>
                    <header style={{alignSelf:"center",textAlign:"center"}} className='my-Header'>
                        Expertises
                    </header>
                    </Col>
                </Row>
                <Row >
                    <Col xs='0' md='3'></Col>
                    <Col style={{padding:'3vh 0vh'}} xs='12' md='6'> 
                        <Row >
                        <p style={{textAlign:'center'}} className='my-paragraph '>Our team is committed to design and manufacture metering systems in the oil and gas industry, providing users with the most professional and optimized integrated solutions. Utilizing our experience, we can continuously meet all kinds of customers’ metering requirements. We specialize in 0.03% flow meter calibration lab and focus on the metering testing and equipment manufacturing in energy, oil, gas, and environmental protection industries.</p>
                        </Row>
                    </Col>
                    <Col xs='0' md='3'></Col>
                </Row>
                <Row>
                    <img  src={SmartMetering} alt="smart_metering" style={{ width: "100%", height: "auto" }} /> 
                </Row>
            </Container>
    )
}

export default Expertise;