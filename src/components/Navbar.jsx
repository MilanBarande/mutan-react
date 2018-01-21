import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const PageNavbar = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a className="navbar-link" href="#home">
          MUTAN VQA
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem className="navbar-link" target="_blank" href="https://arxiv.org/abs/1705.06676">
        The Paper
      </NavItem>
      <NavItem className="navbar-link" target="_blank" href="https://github.com/Cadene/vqa.pytorch">
        Github Repository
      </NavItem>
      <NavDropdown title="The authors" id="basic-nav-dropdown">
        <MenuItem className="navbar-link" target="_blank" href="https://twitter.com/labegne">
          Hedi Ben-Younes
        </MenuItem>
        <MenuItem className="navbar-link" target="_blank" href="http://remicadene.com/">
          Rémi Cadène
        </MenuItem>
        <MenuItem className="navbar-link" target="_blank" href="http://webia.lip6.fr/~cord/">
          Matthieu Cord
        </MenuItem>
        <MenuItem className="navbar-link" target="_blank" href="http://webia.lip6.fr/~thomen/">
          Nicolas Thome
        </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default PageNavbar;
