import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const activeNavLinkStyle: React.CSSProperties | undefined = {
  fontWeight: 'bold',
  color: 'black',
};

export const MyNavbar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand href="/">Harald Vinje</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="nav-section">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink to="/about" activeStyle={activeNavLinkStyle}>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle={activeNavLinkStyle}>
            Projects
          </NavLink>
          <NavLink to="/resume" activeStyle={activeNavLinkStyle}>
            Resume
          </NavLink>
          <NavLink to="/contact" activeStyle={activeNavLinkStyle}>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
