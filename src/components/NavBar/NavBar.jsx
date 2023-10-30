import CartWidget from "../CartWidget/CartWidget"

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Tu Cafeteria Fitt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Inicio</Nav.Link>
                            <Nav.Link href="#action2">Desayunos</Nav.Link>
                            <NavDropdown title="Menus" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Vegetarianos</NavDropdown.Item>
                                <NavDropdown.Item href="#Gluten Free"> Gluten Free </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
                <CartWidget />
            </Navbar>

            

        </>
    );
}

export default NavBar

