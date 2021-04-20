import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand className="nav-brand" href="/">Beneath The Stars</NavbarBrand>
        <Nav className="header-bar" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/aptindex/">Listed Apts</NavLink>
            </NavItem>
          { logged_in &&
            <>
              <NavItem>
                <NavLink href="/myapts">My Apartments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aptnew">Add New Apt</NavLink>
              </NavItem>
              <NavItem>
                <a href={ sign_out_route }>Sign Out</a>
              </NavItem>
            </>
          }
          { !logged_in &&
            <NavItem className="header-bar">
              <a href={ sign_in_route }>Sign In</a>
            </NavItem>
          }
        </Nav>
    </Navbar>
  </div>
  );
};
}
export default Header;
