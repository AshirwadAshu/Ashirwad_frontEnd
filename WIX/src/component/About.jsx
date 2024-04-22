import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// import Button from 'react-bootstrap/Button';

function About() {
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

    <Container style= {{ backgroundColor: '#DCDCDC', height: '115vh', width: '100vw'}}>
        <Row>
            <Col xs={6} md={6}>
            <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_873,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'115vh'}} />
            
             </div>
            </Col>
            <Col xs={6} md={6}>
        <Col xs={6} md={6}>
         
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', top: '80%',paddingTop:'200px', textAlign: 'justify', alignItems:'center',fontFamily:'serif',font:'message-box', fontSize:'15px' }}>
              <h4>ABOUT JADE</h4>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
            <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>

            <h6>Education:</h6>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              

              <h6>Awards & Nominations:</h6>
              <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
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
<p className='d-flex justify-content-center align-items-center' style={{ fontFamily:'initial', fontStyle:'serif', fontWeight:'normal', fontSize:'10px', textJustify:'inter-character'}}>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
<a style={{ color:'black', marginLeft: '5px' }} href='#'>Wix</a></p>










</>

  )
}

export default About