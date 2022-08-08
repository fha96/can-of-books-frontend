import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './components/AuthButtons';


class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem ><Link to="/" className="nav-link" >Home &nbsp;</Link></NavItem>
          <NavItem ><Link to="/profile" className="nav-link" >Profile&nbsp;&nbsp;</Link></NavItem>
          <NavItem ><br/><AuthButtons /></NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>

      </>
    )
  }
}

export default Header;
