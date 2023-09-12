import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import '../custom.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const Footer = () => {
    return(
            <div className="my-FooterContainer" style={{backgroundColor:"#285A84", marginTop:'10vh' }}>
            <Container  style={{color:'white' , paddingTop: "8vh", paddingBottom: "2vh",paddingLeft: "5vh",paddingRight: "5vh",}}>
                <Row  md="2" className='my-Newsletter' xs="12" >
                    <Col style={{alignSelf:'center'}} xs="12" md="5">
                        <header className='my-Subject'>
                            Join MAE    
                        </header>
                        <p style={{fontFamily:'roboto', fontSize:'14px', lineHeight:"150%", fontWeight:'400'}}>
                        MAE is the leader in metering solutions for the oil and gas industry, providing users with the most professional and optimized integrated solutions for flow meter calibration and other metering needs.
                        </p>
                    </Col>
                    
                    <Col className='my-Actions'  xs="9" md='6' style={{alignContent:'flex-end', alignItems:'flex-end'}}>
                        
                        <Col >
                            <Row  >
                                <Col xs="8" >
                                    <Input
                                        id="subscribeEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                                    />
                                </Col>
                                <Col xs='4'>
                                <button className='subscribe-button' >Subscribe</button>
                                </Col>
                            </Row> 
                            <Row style={{paddingTop:'5px'}}><p style={{fontFamily:'roboto', fontSize:'12px', lineHeight:"150%", fontWeight:'400'}}>By subscribing you agree to our Privacy Policy</p></Row >
                        </Col>
                    </Col>
                </Row>

                
                <Row className='my-Links' style={{marginTop:'15vh'}}>
                    <Col  style={{alignSelf:'center'}}>
                        <p style={{fontFamily:'roboto', fontSize:'12px', lineHeight:"150%", fontWeight:'400', textAlign:'center'}}>© 2023 Measurement Advanced Engineering. All rights reserved. We specialize in 0.03% precision flow meter calibration lab services.</p>
                    </Col>
                </Row>
                
              
            </Container>
        </div>
    )
}

export default Footer;