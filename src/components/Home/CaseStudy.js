import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import  '../../custom.css';



const cases = [
    {
        Name:'Yangzi Petrochemical Crude Oil Metering System',
        Url:'http://www.mae.com.sg/newsinfo/157094.html',
        ImageUrl:'https://nwzimg.wezhan.net/contents/sitefiles3602/18011001/images/1039376.jpg',
        Description:'Metering Solution',  
        Path:"/caseone"
    },
    {
        Name:'Tianjin Petrochemical crude oil measurement case',
        Url:'http://www.mae.com.sg/newsinfo/157093.html',
        ImageUrl:'http://nwzimg.wezhan.hk/contents/sitefiles3602/18011001/images/1039377.jpg',
        Description:'Metering Solution',
        Path:"/casetwo" 
    },
    {
        Name:'Jinling Petrochemical Crude Oil Metering System',
        Url:'http://www.mae.com.sg/newsinfo/157092.html',
        ImageUrl:'http://nwzimg.wezhan.hk/contents/sitefiles3602/18011001/images/1039378.jpg',
        Description:'Metering Solution', 
        Path:"/casethree"  
    },
    

]




const CaseStudy= () => {
    return(

            <Container className="my-Container">

                <header style={{alignSelf:"center",textAlign:"center", marginBottom:"2vh"}} className='my-Subject'>
                    Blog
                </header>   
                    
                <Row  md="expand">
                    <Col xs='0' md='3'></Col>
                    <Col style={{alignSelf:'center'}}>
                    <header style={{alignSelf:"center",textAlign:"center"}} className='my-Header'>
                    Stay up to date with the latest industry news and tips by reading our blog.
                    </header>
                    </Col>
                    <Col xs='0' md='3'></Col>
                </Row>
                <Row >
                    <Col xs='0' md='3'></Col>
                    <Col style={{padding:'3vh 0vh'}} xs='12' md='6'> 
                        <Row >
                        <p style={{textAlign:'center'}} className='my-paragraph '>From industry trends to product updates, our blog covers it all. Keep up to date with the latest and greatest in the oil and gas industry.</p>
                        </Row>
                    </Col>
                    <Col xs='0' md='3'></Col>
                </Row>
                <Row>
                   {cases.map((casestudy,index) => {
                        return(
                        <Col className='center' style={{alignContent:'center',marginTop:'50px'}} xs='12' md='4' id={index}>
                        <Row>
                        <img src={casestudy.ImageUrl} style={{ width: "100%", height: "auto" }} alt={casestudy.Name}/>
                        </Row>
                        
                       
                        <header className='my-Subject' style={{marginTop:'20px' , marginBottom:'10px'}}>
                            {casestudy.Name}
                        </header>
                        <p className='my-paragraph'>
                            {casestudy.Description}    
                        </p>
                        <button className='secondary-button'  style={{marginTop:'1vh'}}>
                            <Link to={{ pathname: casestudy.Path,   }} className='text-no-decro'>
                                Learn More
                            </Link>
                        </button>
            
                    </Col>  )
                        
                    }) } 
                    
                </Row>
            </Container>
    )
}

export default CaseStudy;