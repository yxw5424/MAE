import React from 'react';
import { Container, Col, Row } from 'reactstrap';



const ProductPage = (props) => {

    const {product} = props
    console.log(product)
    return(
        <div className='my-ContentContainer'>
            <Container className="my-Container"> 
                <Row  md="expand">
                    <Col style={{alignSelf:'center'}}>
                    <header style={{alignSelf:"center",textAlign:"center"}} className='my-Header'>
                        {product.name}  
                    </header>
                    </Col>
                </Row>
                {console.log(product.name)}
                <Row >
                    <Col xs='0' md='3'></Col>
                    <Col style={{padding:'3vh 0vh'}} xs='12' md='6'> 
                        <Row >
                        <p style={{textAlign:'center'}} className='my-paragraph '>{product.description}</p>
                        </Row>
                    </Col>
                    <Col xs='0' md='3'></Col>
                </Row>
                <Row>
                    <img  src={product.headerimgurl} alt={product.name} style={{ width: "100%", height: "auto" , maxHeight:'70vh'}} /> 
                </Row>
            </Container>
            <Container className="center my-Container">
                <Col>
                    <Row  xs='1'>
                        <Col xs='12' md='5' >
                            <p className='my-paragraph'>{product.text1}</p>
                        </Col>
                        <Col xs='0' md='2'></Col>
                        <Col xs='12' md='5'>
                            <img src={product.imgurl1} alt={product.name} className="responsive-image"/>
                        </Col>
                    </Row>
                    </Col>
            </Container>
            <Container className="center my-Container">
                <Col>
                    <Row  xs='1'>
                        <Col xs='12' md='5'>
                            <img src={product.imgurl2} alt={product.name} className="responsive-image"/>
                        </Col>
                        <Col xs='0' md='2'></Col>
                        <Col xs='12' md='5' >
                            <p className='my-paragraph'>{product.text2}</p>
                        </Col>
                    </Row>
                    </Col>
            </Container>
           
        </div>
    )
}

export default ProductPage;