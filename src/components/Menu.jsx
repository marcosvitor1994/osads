import {Container, Nav, Navbar} from 'react-bootstrap'
import React from 'react'
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <>  
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>OSADS</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/home">Orquestra</Link>
                    <Link className="nav-link" to="/partituras">Partituras</Link>
                    <Link className="nav-link" to="/maestro">Maestro</Link>
                    <Link className="nav-link" to="/contato">Contato</Link>
                </Nav>
            </Container>
        </Navbar>
  
            
        </>
    )
}

export default Menu
