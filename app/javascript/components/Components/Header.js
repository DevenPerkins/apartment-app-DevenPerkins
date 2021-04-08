import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand className="nav-brand" href="/">Beneath The Stars</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse className="nav-bar-1" isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
          <NavLink to="/learn">Learn More</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};

export default Header;


{/* <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
  <div className="container"><a className="navbar-brand logo" href="#">Brand</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link active" href="/index.html">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/features.html">Features</a></li>
        <li className="nav-item"><a className="nav-link" href="/pricing.html">Pricing</a></li>
        <li className="nav-item"><a className="nav-link" href="/about-us.html">About Us</a></li>
        <li className="nav-item"><a className="nav-link" href="/contact-us.html">Contact Us</a></li>
      </ul>
    </div>
  </div>
</nav> */}