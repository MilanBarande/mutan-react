import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'mdbreact';

class PageNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
      const { collapse, dropdownOpen, isWideEnough } = this.state;
        return (
          <Router>
                <Navbar color="indigo" light expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>MUTAN VQA</strong>
                    </NavbarBrand>
                    { !isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={collapse} navbar>
                        <NavbarNav left>
                          <NavItem style={{ marginTop: '7px' }} >
                              <a href="https://arxiv.org/abs/1705.06676" rel="noopener noreferrer" className="navbar-link" target="_blank">Read the paper</a>
                          </NavItem>
                          <NavItem style={{ margin: '7px 10px 0 10px' }} >
                              <a href="https://github.com/Cadene/vqa.pytorch" rel="noopener noreferrer" className="navbar-link" target="_blank">Github Repository</a>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>The authors</DropdownToggle>
                              <DropdownMenu>
                                <a href="https://twitter.com/labegne" rel="noopener noreferrer" className="navbar-link" target="_blank"><DropdownItem>Hedi Ben-Younes</DropdownItem></a>
                                  <a href="http://remicadene.com/" rel="noopener noreferrer" className="navbar-link" target="_blank"><DropdownItem>Rémi Cadène</DropdownItem></a>
                                  <a href="http://webia.lip6.fr/~cord/" rel="noopener noreferrer" className="navbar-link" target="_blank"><DropdownItem>Mathieu Cord</DropdownItem></a>
                                  <a href="http://webia.lip6.fr/~thomen/" rel="noopener noreferrer" className="navbar-link" target="_blank"><DropdownItem>Nicolas Thome</DropdownItem></a>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
              </Router>
        );
    }
}

export default PageNavbar;
