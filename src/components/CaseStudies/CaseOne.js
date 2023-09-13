import React from 'react';
import { Container, Col, Row } from 'reactstrap';





const CaseOne = () => {
    return(
        <div className='my-ContentContainer'>
            <Container className="center my-Container">
                <Col>
                    <Row style={{ alignItems:'center' }} xs='1'>
                        <Col xs='12' md='5' >
                            <header className='my-Header' style={{marginTop:'2vh',marginBottom:'2vh'}}>
                                Yangzi Petrochemical Crude Oil Metering System
                            </header>
                            <header className='my-Subject'>
                                Sinopec Yangzi
                            </header>
                            <p style={{fontFamily:'roboto', fontSize:'14px', color:'grey'}}>2019/01/17 14:12</p>
                        </Col>
                        <Col xs='0' md='2'></Col>
                        <Col xs='12' md='5'>
                            <img src='http://nwzimg.wezhan.hk/contents/sitefiles3602/18011001/images/1037884.jpg' alt='Yangzi Petrochemical crude oil measurement site construction' className="responsive-image"/>
                        </Col>
                    </Row>
                    </Col>
            </Container>
            <Container >
                <Row>
                    <Col style={{marginTop:'2vh'}}>

                    <header className='my-Subject'>
                        Background of the project:
                    </header>
                    <p className='my-paragraph'>The project will increase the design capacity of two crude oil long-distance pipelines (the Shanghai-Nanjing crude oil inlet line and the Yiyang crude oil inlet line) of Sinopec Yangzi Petrochemical Co., Ltd. to ensure that the relevant personnel of the company can reliably monitor the flow, density and Parameters such as water quantity, to avoid loss of efficiency and measurement disputes to the utmost.</p>
                    <p className='my-paragraph'>Fully consider the area where the crude oil is measured. It is an explosion danger zone. All electrical equipment and instruments are required to have an explosion-proof rating of not less than Exd IIB T4. The overall protection rating is not less than IP65. In addition, the ambient temperature and relative humidity need to be considered, and the physical properties of crude oil are also important parameters.</p>
                    </Col> 
                    <Col style={{marginTop:'2vh'}}>
                    <header className='my-Subject'>
                        Technical requirements and guarantees:
                    </header>
                    <p className='my-paragraph'>Technical guarantee: In order to ensure the accuracy of crude oil measurement, the flow measuring device and the transmitter are supplied in a sturdy manner. All instruments, valves, pipelines and heat insulation are assembled at the factory and installed on the armored base. The process pipe network connection is flanged. All instruments should meet the environmental conditions of the area and the characteristics of the crude oil.</p>
                    <p className='my-paragraph'>Structural and mechanical selection: crude oil metering overall size requirements, 9.0m (length) * 6.5m (width). The two main lines are separated by a separate armored base and are flushed in parallel to share a cleaning unit. All pipes, valves and instruments in the metering chamber require electric heat tracing.</p>
                    </Col>    
                </Row>
                <Col style={{marginTop:'2vh'}}>
                    <header className='my-Subject'>
                        Inspection and testing:
                    </header>
                    <p className='my-paragraph'>After the equipment is manufactured, the ladder needs to perform static and dynamic inspection and testing of the metering system and submit a test report. Electrical testing and overall performance testing are also required. The performance test means that the ladder should connect the whole stern to the flow verification line, operate all valves, open the water circulation test, and perform performance test according to the JJG1038-2008 Coriolis mass flowmeter verification procedure. The FAT factory test was conducted at the factory. In addition, on-site SAT testing should be performed as required by the system under actual operating conditions.</p>


                    
                
                </Col>
            </Container>
        </div>
    )
}

export default CaseOne;