import React from 'react';
import { Container, Col, Row } from 'reactstrap';





const CaseThree = () => {
    return(
        <div className='my-ContentContainer'>
            <Container className="center my-Container">
                <Col>
                    <Row style={{ alignItems:'center' }} xs='1'>
                        <Col xs='12' md='5' >
                            <header className='my-Header' style={{marginTop:'2vh',marginBottom:'2vh'}}>
                            Jinling Petrochemical Crude Oil Metering System
                            </header>
                            <header className='my-Subject'>
                            Sinopec Jinling
                            </header>
                            <p style={{fontFamily:'roboto', fontSize:'14px', color:'grey'}}>2019/01/17 14:12</p>
                        </Col>
                        <Col xs='0' md='2'></Col>
                        <Col xs='12' md='5'>
                            <img src='http://nwzimg.wezhan.hk/contents/sitefiles3602/18011001/images/1037918.jpg' alt='Tianjin Petrochemical crude oil measurement case' className="responsive-image"/>
                        </Col>
                    </Row>
                    </Col>
            </Container>
            <Container >
                <Row xs='1' md='2'>
                    <Col style={{marginTop:'2vh'}}>
                        <Row>
                            <header className='my-Subject'>
                                Background of the project:
                            </header>
                            <p className='my-paragraph'>Jinling Branch 12# terminal unloading crude oil metering facility was put into use around 1993. The 12# terminal unloading line has a diameter of DN400. After unloading from the 12# terminal, it will be measured by the metering facility through the DN400 pipeline and then enter the Shiyanqiao crude oil storage tank. store.</p>
                            <p className='my-paragraph'>The implementation of this project is to further enhance the control of crude oil metering and processing. Parameters such as flow, pressure, temperature and moisture content of crude oil can be transmitted to the workshop in time.</p>
                            <p className='my-paragraph'>It is necessary to fully consider the site conditions, including atmospheric pressure, ambient temperature, relative humidity, rainfall and snowfall, and lightning conditions, and design a crude oil metering system that meets the working conditions.</p>
                        </Row>
                        <Row style={{marginTop:'2vh'}}>
                            <header className='my-Subject'>
                                skills requirement:
                            </header>
                            <p className='my-paragraph'>The structural design of the measuring enthalpy should fully consider the operation, maintenance and maintenance of the built-in instrument and valve; the main instrument equipment, process equipment, explosion-proof box, painting, marking and transportation, document drawings and data requirements, warranty and after-sales service meet the requirements.</p>
                        </Row>
                    </Col> 
                    <Col >
                        
                        <Row style={{marginTop:'2vh'}}>
                            <header className='my-Subject'>
                            Inspection and testing:
                            </header>
                            <p className='my-paragraph'>After the equipment is manufactured, the ladder needs to perform static and dynamic inspection and testing of the metering system and submit a test report. Electrical testing and overall performance testing are also required. The performance test means that the ladder should connect the whole stern to the flow verification line, operate all valves, open the water circulation test, and perform performance test according to the JJG1038-2008 Coriolis mass flowmeter verification procedure. The FAT factory test was conducted at the factory.</p>
                        </Row>
                    </Col>    
                </Row>
            </Container>
        </div>
    )
}

export default CaseThree;