import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LogoSVG from "../logo_with_name.svg";
import '../custom.css';
import { AiFillUnlock, AiOutlineLineChart,AiOutlineDashboard } from 'react-icons/ai';


const Brief = () => {
    return(

            <Container className="my-Container">
                <Row  md="expand">
                    <Col style={{alignSelf:'center'}}>
                    <header style={{alignSelf:"center",textAlign:"center"}} className='my-Header'>
                        Unlock Metering
                    </header>
                    </Col>
                </Row>
                <Row style={{marginTop:"5vh"}}>
                    <Col style={{margin:"2vh"}}>
                        <Row style={{ padding: "2vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <AiFillUnlock style={{height:"4vh", width:'auto'}}/>
                        </Row>
                        <Row style={{margin:'3vh'}}>
                            <header className='my-card-subject' style={{textAlign:'center'}}>Unlock Potential</header>
                        </Row>
                        <Row>
                        <p style={{textAlign:'center'}} className='my-paragraph '>MAE is dedicated to designing and manufacturing metering systems for the oil and gas industry. Our experience allows us to tailor solutions to meet our customers’ needs. Our products are used in a variety of scenarios, such as liquid oil and chemical products, low temperature liquefied gas, and high pressure wellhead multiphase flow. We provide customers with optimized, safe, and accurate integrated metering solutions, and specialize in 0.03% flow meter calibration lab.</p>
                        </Row>
                    </Col>
                    <Col style={{margin:"2vh"}}>
                        <Row style={{ padding: "2vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <AiOutlineLineChart style={{height:"4vh", width:'auto'}}/>
                        </Row>
                        <Row style={{margin:'3vh'}}>
                            <header className='my-card-subject' style={{textAlign:'center'}}>Optimized Solutions</header>
                        </Row>
                        <Row>
                        <p style={{textAlign:'center'}} className='my-paragraph '>MAE is devoted to providing customers with optimal, safe, and accurate integrated metering solutions. We strive to lead the way in modularization, intelligence, and informatization of metering technology. Our team can offer custom design and services to suit a wide range of customer needs.</p>                        
                        </Row>
                    </Col>
                    <Col style={{margin:"2vh"}}>
                        <Row style={{ padding: "2vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <AiOutlineDashboard style={{height:"4vh", width:'auto'}}/>
                        </Row>
                        <Row style={{margin:'3vh'}}>
                            <header className='my-card-subject' style={{textAlign:'center'}}>Advanced Metering</header>
                        </Row>
                        <Row>
                            <p style={{textAlign:'center'}} className='my-paragraph '> MAE is a leader in advanced metering technology. We are committed to delivering efficient and reliable metering solutions to our customers. Our products are designed to ensure accuracy, safety, and efficiency in the metering process.</p>
                        </Row>
                    </Col>
                
                </Row>
            </Container>
    )
}

export default Brief;