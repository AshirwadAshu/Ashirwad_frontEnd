import React from 'react'
import { Container,Nav,NavDropdown,Navbar,Image,Button } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';





const FoodPhotographer = () => {
  return (

    
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
       <Nav className="me-auto"></Nav>
       

        <Navbar.Brand href="#home">J.A L I S S A.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto"></Nav>
          
          <Nav className='justify-content-end'>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Portfolio</Nav.Link>            
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Books</Nav.Link>
            <Nav.Link href="#deets">Blog</Nav.Link>
            <Nav.Link href="#deets">Client Albums</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#deets">Contact</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
     <nav className='md-2'>
        <Image
          Image src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1745,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'115vh',filter: 'brightness(50%)'}}/>
          <div style={{ position: 'absolute',fontFamily:'initial',fontStretch:'extra-expanded', fontStyle:'normal',fontWeight:'lighter', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1>THE ART OF FOOD</h1>
              <p>P H O T O G R A P H Y</p>
              {/* <Link to="/Portfolio"> */}
              <Button variant="outline-light">View More</Button>{' '}
              {/* </Link> */}
              
            </div>
</nav>
<br />
    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>
<br />
    <p className='d-flex justify-content-center align-items-center' style={{ fontFamily:'serif', fontStyle:'normal', fontWeight:'lighter', fontSize:'10px', textJustify:'inter-character'}}>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='#'>Wix</a></p>


    



    </>
  );
}


export default FoodPhotographer