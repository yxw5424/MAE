import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import HeaderImage from "../HeaderImage.jpg";
import '../custom.css';

const Header = () => {
    return(
            <Container style={{padding:'0vh 5vh'}}>
                <Row>
                    <Col md="6" clasName="d-flex align-items-center" style={{ alignSelf:"stretch"}}>
                        <div style={{marginTop:"5vh",fontFamily:"roboto"}}>
                            <h1 style={{
                          
                                fontsize:'26px',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                lineheight: '120%' }}>
                                    Flow Meter
                            </h1>
                            <h1 style={{
                        
                                fontsize:'26px',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                lineheight: '120%'}}>
                                    Calibration Experts
                            </h1>
                                
                            <p style={{
                                marginTop:"4vh", 
                                fontsize:'11px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                maxWidth:'90%'}}>
                                    Welcome to MAE – Your Trusted Partner for Unparalleled Metering Excellence!
                                </p>

                            <p style={{
                                fontsize:'11px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                maxWidth:'90%'}}>                                    
                                At MAE, we're more than just experts in designing and manufacturing advanced metering systems for the oil and gas industry. We are proud to introduce ourselves as a leading 0.03% uncertainty flow meter calibration lab, setting the industry standard for precision and accuracy.
                            </p>

                        </div>
                            
                        <button className='primary-button' style={{marginTop:'4vh'}}>Get A Quote</button>
                                                       

                    </Col>
                    <Col md="6" className="d-flex align-items-center mr-auto" style={{padding:'5vh 5vh'}}>
                        <img src={HeaderImage} alt="Image"  className="responsive-image" />

                    </Col>
                </Row>
            </Container>
    )
}

export default Header;