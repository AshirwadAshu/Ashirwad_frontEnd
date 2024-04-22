import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
// import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function ClientAlbums() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" style={{ fontFamily:'serif', fontWeight:'lighter', fontStyle:'initial'}}>
      <Container>
      {/* <Nav className="me-auto"></Nav> */}

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


    <h1 className="d-flex justify-content-center align-items-center" style={{ paddingTop:'80px', fontFamily:'fantasy'}}>CLIENT ALBUMS</h1>
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/8bb438_391be5ba664646cf85efa862bf2f93be~mv2.jpg/v1/fill/w_500,h_333,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8bb438_391be5ba664646cf85efa862bf2f93be~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84YmI0MzhfMzkxYmU1YmE2NjQ2NDZjZjg1ZWZhODYyYmYyZjkzYmV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.6CZOJDnmAADjZkPj9J3r5rXA5lG0_Ms0hCN3LvcAewI" alt="Your Image" style={{ width: '100%', height:'90vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'serif',fontSize:'15px', textAlign: 'justify',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h5>GREEN EDITORIAL</h5>
              <p>Client: Herbal Magazine</p>
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/8bb438_46776c5ebdfa4c2d93f77358e5b2fd41~mv2.jpg/v1/fill/w_500,h_345,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8bb438_46776c5ebdfa4c2d93f77358e5b2fd41~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84YmI0MzhfNDY3NzZjNWViZGZhNGMyZDkzZjc3MzU4ZTViMmZkNDF-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.3TeH4aHZtgOs_XvaIQ-1Vnlw_X7LzqcWchZsN_YFT2w" alt="Your Image" style={{ width: '100%', height:'90vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute',fontFamily:'serif',textAlign: 'justify',fontSize:'15px',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h5>BREAD BAKING RECEPIES </h5>
              <p>Client: The Baker Blog</p>
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/8bb438_5571b62b21074416a94a6e7cb48567e8~mv2.jpg/v1/fill/w_500,h_331,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8bb438_5571b62b21074416a94a6e7cb48567e8~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84YmI0MzhfNTU3MWI2MmIyMTA3NDQxNmE5NGE2ZTdjYjQ4NTY3ZTh-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.wwGn2iyXsFrlEMui0zzfzsCS45hjYpqek2yx16EHprk"alt="Your Image" style={{ width: '100%', height:'90vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute',fontFamily:'serif',textAlign: 'justify', fontSize:'15px',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h5>French Cookbook</h5>
              <p>Client: La Peche </p>
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
    <p className='d-flex justify-content-center align-items-center' style={{ fontFamily:'serif', fontStyle:'initial', fontWeight:'lighter', fontSize:'10px', textJustify:'inter-character'}}>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='#'>Wix</a></p>


    </>
  );
}

export default ClientAlbums;