import React from 'react'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';


const contactStyle = {
    color: "rgba(0, 0, 0, 0.5)",
    textDecoration: "none",
    ':hover': {
        textDecoration: "none",
        color: "rgba(0,0,0,0.7)"
    }
}

const NavBar = () => {
    return (
        <Navbar collapseOnSelect className="border-bottom" expand="lg"> {/*Border at bottom of navbar*/}
            <LinkContainer to="/">
                <Navbar.Brand>Vivek Jadeja</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{ 'alignItems': 'flex-end' }} >
                    <LinkContainer className="nav-link" to="/">
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer className="nav-link" to="/about">
                        <Nav.Link>
                            About
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer className="nav-link" to="/gallery">
                        <Nav.Link>
                            Gallery
                        </Nav.Link>
                    </LinkContainer>
                    <div className="nav-link">
                        <a style={contactStyle} target="_blank" href="mailto:vivek.jadeja98@gmail.com">Contact Me</a>
                    </div>
                    {/* <LinkContainer target="_blank" className="nav-link" to="mailto:vivek.jadeja98@gmail.com">
                        <Nav.Link>
                            Contact
                        </Nav.Link>
                    </LinkContainer> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar


