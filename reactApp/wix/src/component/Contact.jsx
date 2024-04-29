import {  Container, Row, Col, Form } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Contact() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" style={{ fontFamily:'serif', fontWeight:'lighter', fontStyle:'initial'}}>
      <Container>
       <Nav className="me-auto"></Nav> 

        <Navbar.Brand href="#home">J. ALISSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto"></Nav>
          
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>            
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Books</Nav.Link>
            <Nav.Link href="#deets">Blogs</Nav.Link>
            <Nav.Link href="#deets">Client Albums</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Container style={{ backgroundColor: '#DCDCDC', height: '140vh', width: '100vw'}}>
      <Row>
        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_800,h_1006,al_c,q_85,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg" alt="Your Image" style={{ width: '100%', height:'140vh'}} />
           
          </div>
        </Col>

        <Col xs={6} md={6}>
        <Col xs={12} md={12}>
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', top: '10%',paddingTop:'70px',paddingRight:'20px', textAlign:'justify' }}>
             <h5>GET IN TOUCH</h5>
             <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
             <p>Tel: 123-456-7890  |  Email: info@mysite.com</p>

             <Form style={{  marginTop:'0px', paddingLeft:'13px', paddingRight:'10px',height:'18vh' }}>
            {/* <Row className="align-items-left"> */}
              <Col>
                <Form.Group className="mb-2 px-5 "  controlId="name">
                  <Form.Label >First Name *</Form.Label>
                  <Form.Control type="text" placeholder='Enter name' />
                </Form.Group>

                <Form.Group className="mb-2 px-5 " controlId="phone">
                  <Form.Label>Last name *</Form.Label>
                  <Form.Control type="text" placeholder='Last name' />
                </Form.Group>

                <Form.Group className="mb-2 px-5" controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" placeholder='Enter your email' />
                </Form.Group>
              
                <Form.Group className="mb-2 px-5 " controlId="sub">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Control type="text" placeholder='Subject' />
                </Form.Group>
            
                <Form.Group className="mb-2 px-5" controlId="message">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control as="textarea" rows={4} cols={3} placeholder='Comment'/>
                </Form.Group>
            <div className="text-center">               
                 <Button variant="primary" type="submit"  className=" w-40" >
              Submit
            </Button>
            </div>


<br />
<hr />
            <p>Stay Up-To-Date with New Posts</p>
            <Form.Group className="mb-3 ms-3" controlId="email">
                  <Form.Label className="d-flex justify-content-start " >Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <div className="text-center">
                <Button variant="primary " type="submit" className=" w-40" >
              Subscrib Now
            </Button>
            </div>

              </Col>
            
          
            {/* <Col xs={12} md={12} className="d-flex justify-content-center align-items-center" style={{ paddingLeft:'40px'}}>
            
            </Col> */}
          </Form>
            </div>
          </div>
        </Col>
        </Col>
      </Row>
    </Container>

<br />
    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>
<br />
    <p className='d-flex justify-content-center align-items-center' style={{ fontFamily:'serif', fontStyle:'initial', fontWeight:'lighter', fontSize:'10px', textJustify:'inter-character'}}>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='#'>Wix</a></p>

    </>
  );
}

export default Contact;
