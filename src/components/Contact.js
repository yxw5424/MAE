import React, {useState} from 'react';
import { Container,Row,Col,Form,FormGroup,Label,Input } from 'reactstrap';
import { Map, Marker } from "pigeon-maps";






const Contact = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        email: '',
        subject:'',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert('Form submitted successfully');
            // Reset the form fields if needed
            setFormData({ firstname: '', lastname: '', email: '', subject:'', message: '' });
          } else {
            alert('Error submitting form');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

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
                        <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                            <FormGroup >
                                <Label for="firstname">
                                First Name
                                </Label>
                                <Input
                                id="firstname"
                                name="firstname"
                                placeholder=""
                                type="firstname"
                                style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                                value={formData.firstname}
                                onChange={handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="lastname">
                                Last Name
                                </Label>
                                <Input
                                id="lastname"
                                name="lastname"
                                placeholder=""
                                type="lastname"
                                style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                                value={formData.lastname}
                                onChange={handleChange}
                                />
                            </FormGroup>
                            </Col>
                            
                        </Row>
                        <FormGroup>
                            <Label for="email">
                            Email
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder=""
                            type="email"
                            style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject">
                            Subject
                            </Label>
                            <Input
                            id="subject"
                            name="subject"
                            placeholder=""
                            type="subject"
                            style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}
                            value={formData.subject}
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">
                            Message
                            </Label>
                            <Input
                            id="message"
                            name="message"
                            type="textarea"
                            style={{borderRadius: "0",fontFamily:'roboto', fontSize:'16px', lineHeight:"150%", fontWeight:'400'}}   
                            value={formData.message}
                            onChange={handleChange}
                            />
                        </FormGroup>
                       
                        <button className='primary-button' style={{marginTop:'50px',marginBottom:'50px'}} type="submit">
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