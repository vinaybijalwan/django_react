import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to="/">To Do App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='additem' to="/">Add Item</Link>
                        <Link className='Showitem' to="/todoshow">Show Item</Link>
                        
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>

    </div>
  )
}
