import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BtnToggle from '../Components/BtnToggle/BtnToggle'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(233, 211, 14)' }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link font-weight-bold">
                            Calculatrice
                        </Nav.Link>
                        <Nav.Link as={Link} to="/todo" className="nav-link font-weight-bold">
                            Todo List
                        </Nav.Link>
                        <Nav.Link as={Link} to="/slider" className="nav-link font-weight-bold">
                            Slider
                        </Nav.Link>
                        <Nav.Link as={Link} to="/pagination" className="nav-link font-weight-bold">
                            Pagination
                        </Nav.Link>
                        <Nav.Link as={Link} to="/lang" className="nav-link font-weight-bold">
                            Langue
                        </Nav.Link>
                        <Nav.Link as={Link} to="*" className="nav-link font-weight-bold">
                            Autres
                        </Nav.Link>
                    </Nav>
                    <Nav.Link variant="outline-success" className='ms-auto'>{<BtnToggle />}</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
