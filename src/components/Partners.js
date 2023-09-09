import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LogoSVG from "../logo_with_name.svg";
import Astar from "../astar.jpg";
import NJTT from "../NJTT.jpg";
import Emerson from "../emerson-logo.png";
import Endress from "../Endress.jpg"
import '../custom.css';


const Partners = () => {
    return(

            <Container className="center my-Container">
                <Row  md="expand" >
                    <Col style={{alignSelf:'center'}}>
                    <header style={{alignSelf:"center",textAlign:"center"}} className='my-Subject'>
                        MAE:Trusted Metering Solutions
                    </header>
                    </Col>
                </Row>
                <Row xs="2" md="2" lg="4">
                    <Col style={{ padding: "4vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img  src={Astar} alt="astar_logo" style={{ width: "100%", height: "auto" }} /> 
                    </Col>
                    <Col style={{ padding: "4vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img  src={NJTT} alt="Logo" style={{ width: "100%", height: "auto" }} /> 
                    </Col>
                    <Col style={{ padding: "4vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={Emerson} alt="Logo" style={{ width: "100%", height: "auto" }} /> 
                    </Col>
                    <Col style={{ padding: "4vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={Endress} alt="Logo" style={{ width: "100%", height: "auto" }} /> 
                    </Col>
                </Row>
            </Container>
    )
}

export default Partners;