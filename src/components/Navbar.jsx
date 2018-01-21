import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const PageNavbar = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">MUTAN VQA</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="https://arxiv.org/abs/1705.06676">
        Read the Paper
      </NavItem>
      <NavItem eventKey={2} href="https://github.com/Cadene/vqa.pytorch">
        Github repository
      </NavItem>
      <NavDropdown eventKey={3} title="The authors" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Hedi Ben-Younes</MenuItem>
        <MenuItem eventKey={3.2}>Rémi Cadène</MenuItem>
        <MenuItem eventKey={3.3}>Matthieu Cord</MenuItem>
        <MenuItem eventKey={3.4}>Nicolas Thome</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default PageNavbar;
