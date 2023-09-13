import React from 'react';
import { Container, Col, Row } from 'reactstrap';





const CaseTwo = () => {
    return(
        <div className='my-ContentContainer'>
            <Container className="center my-Container">
                <Col>
                    <Row style={{ alignItems:'center' }} xs='1'>
                        <Col xs='12' md='5' >
                            <header className='my-Header' style={{marginTop:'2vh',marginBottom:'2vh'}}>
                            Tianjin Petrochemical crude oil measurement case
                            </header>
                            <header className='my-Subject'>
                            Sinopec Tianjin
                            </header>
                            <p style={{fontFamily:'roboto', fontSize:'14px', color:'grey'}}>2019/01/17 14:12</p>
                        </Col>
                        <Col xs='0' md='2'></Col>
                        <Col xs='12' md='5'>
                            <img src='http://nwzimg.wezhan.hk/contents/sitefiles3602/18011001/images/1037904.jpg' alt='Tianjin Petrochemical crude oil measurement case' className="responsive-image"/>
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
                    <p className='my-paragraph'>Tianjin Petrochemical crude oil entered the plant using five 0.2-stage scraper flowmeters of the pipeline company, which is about 12 million tons per year (up to 15 million tons after the refinery product structure adjustment and oil quality upgrading project is put into production). In recent years, the scraper flowmeter used by the pipeline company has repeatedly failed. Since the scraper flowmeter does not have the recording function of process parameters such as medium density, temperature, pressure, etc., it is difficult to find out the specific time point and the root of the fault. The reason is that when there is a measurement dispute between the two parties, there is a lack of scientific basis for timely and effective treatment. At the same time, due to the small capacity of Tianjin Petrochemical crude oil, after the crude oil enters the plant, it is treated by the “exhaust and payment” method. The production cannot be timely grasped the change of water content, which often occurs due to the high water content. Desalination system current rise, safety valve start jump, device punch tower and other accidents.</p>
                    <p className='my-paragraph'>In order to further strengthen the monitoring process of the crude oil entering the plant and realize the dynamic detection of water content, improve the measurement accuracy and ensure safe production, we propose to build the project.</p>
                    <p className='my-paragraph'>The hardware unit of each subunit of the whole system is integrated into a large module. After strict factory flow measurement and performance verification, the performance indicators are fully in line with expectations, and the data information of each subunit is transmitted to the control system. The monitoring, information exchange and automation of the whole process, to achieve a highly intelligent system.</p>
                    </Col> 
                    <Col style={{marginTop:'2vh'}}>
                    <header className='my-Subject'>
                        significance:
                    </header>
                    <p className='my-paragraph'>The implementation of this project will effectively solve the difficulty of using crude oil mass flow meter in crude oil metering application, and achieve the expected metering performance of the whole unit instead of the metering performance of the single meter through the overall factory verification, from rigorous metering traceability, verification and actuality. From the perspective of application, it is of great significance. The whole system fully reflects the integrity and matching of system functions, comprehensively improves measurement accuracy, and takes into account other important and used auxiliary functions, reducing trade disputes and reducing safety hazards. Great promotion value.</p>
                    </Col>    
                </Row>
            </Container>
        </div>
    )
}

export default CaseTwo;