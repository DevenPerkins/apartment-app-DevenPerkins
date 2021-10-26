import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
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
        <Nav className="ml-auto" navbar>
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
              <NavItem >
              <Button color="primary" href={ sign_out_route }>Sign Out</Button>
              </NavItem>
            </>
          }
          { !logged_in &&
            <NavItem className="header-bar">
              <Button color="primary" href={ sign_in_route }>Sign In</Button>
            </NavItem>
          }
        </Nav>
    </Navbar>
  </div>
  );
};
}
export default Header;
