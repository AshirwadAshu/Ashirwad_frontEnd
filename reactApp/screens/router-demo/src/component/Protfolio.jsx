import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Portfolio() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" style={{ fontFamily:'initial', fontWeight:'normal', fontStyle:'normal'}}>
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


<div>
  <h5 className="d-flex justify-content-center align-items-center" style={{ paddingTop:'80px', fontFamily:'fantasy'}}>PORTFOLIO</h5>
  </div>    
    

    <Container>
      <Row>
        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_585,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'90vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'initial', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h5>EDITORIAL</h5>
              <Button variant="outline-light">View More</Button>{' '}
            </div>
          </div>
        </Col>

         <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_568,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'90vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'initial', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h5>FOOD & SERVE</h5>
              <Button variant="outline-light">View More</Button>{' '}
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_570,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg" alt="Your Image" style={{ width: '100%', height:'90vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'initial', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h5>BAKED FOODS</h5>
              <Button variant="outline-light">View More</Button>{' '}
            </div>
          </div>
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
    <p className='d-flex justify-content-center align-items-center' style={{ fontFamily:'initial', fontStyle:'normal', fontWeight:'normal', fontSize:'10px', textJustify:'inter-character'}}>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='#'>Wix</a></p>


    </>
  );
}

export default Portfolio