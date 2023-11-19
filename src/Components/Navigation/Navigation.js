/* بسم الله الرحمن الرحيم */

import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import './Navigation.css';
import './../../index.css';


function Navigation() {
    return (
        <div id='navigation' className='navigation'>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#home"><img src={logo} className="d-inline-block align-top" alt="React Bootstrap logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link href="#Pride">About Us</Nav.Link>
                            <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                            <Nav.Link href="#Slider">Reviews</Nav.Link>
                            <Nav.Link href="#Questions">FAQ</Nav.Link>
                            <Nav.Link href="#link">4132 132 353</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navigation;
