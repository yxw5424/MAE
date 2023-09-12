import React from 'react';
import { Container,Row,Col,Form,FormGroup,Label,Input } from 'reactstrap';
import { Map, Marker } from "pigeon-maps"





const Contact = () => {
    return(

        <div className='my-ContentContainer'>
            <Container>
                <Row style={{marginBottom:'5vh'}}>
                    <header className='my-Header' style={{marginTop:'5vh', marginBottom:'5vh'}}>
                        CONTACT US TODAY
                    </header>
                </Row>
                <Row>
                    <Col xs='12' md='7'>
               
                        <p className='my-paragraph'>
                        Complete this form to contact our sales team. Based on your replies, our team is happy to answer any questions, provide a live demonstration, or provide a quote for your company.
                        </p>
                        <Form>
                        <Row>
                            <Col md={6}>
                            <FormGroup >
                                <Label for="First Name">
                                First Name
                                </Label>
                                <Input
                                id="FirstName"
                                name="FirstName"
                                placeholder=""
                                type="FirstName"
                                style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="Last Name">
                                Last Name
                                </Label>
                                <Input
                                id="LastName"
                                name="LastName"
                                placeholder=""
                                type="LastName"
                                style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                                />
                            </FormGroup>
                            </Col>
                            
                        </Row>
                        <FormGroup>
                            <Label for="Email">
                            Email
                            </Label>
                            <Input
                            id="Email"
                            name="email"
                            placeholder=""
                            type="email"
                            style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Subject">
                            Subject
                            </Label>
                            <Input
                            id="Subject"
                            name="subject"
                            placeholder=""
                            type="subject"
                            style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Message">
                            Message
                            </Label>
                            <Input
                            id="Message"
                            name="message"
                            type="textarea"
                            style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}   
                            />
                        </FormGroup>
                        <button className='primary-button' style={{marginTop:'50px',marginBottom:'50px'}}>
                            Submit
                        </button>
                        </Form>

                    </Col>
                    <Col xs='0' md='1'>
                    </Col>
                    <Col xs='12' md='4'>
                        
                        <Map 
                            height={'30vh'} 
                            defaultCenter={[1.3179186643645358, 103.62878242898249]} 
                            defaultZoom={12} 
                        >

                            <Marker width={30} anchor={[1.3179186643645358, 103.62878242898249]} color={'#d45353'} />
                        </Map>
                        <Col style={{marginTop:'30px'}}>
                            <header className='my-Subject'>Address</header>
                            <p className='my-paragraph'>53C Tuas South Avenue 1, Singapore, 637271</p>
                            <header className='my-Subject'>Contact</header>
                            <p className='my-paragraph'>+65 8128 4082</p>
                            <header className='my-Subject'>Email</header>
                            <p className='my-paragraph'>general@mae.com.sg</p>
                        </Col>

                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Contact;