import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav} from 'react-bootstrap';
import Logo from '../../assets/img/star-wars-logo.png';
import '../../styles/navbar.css';

const Menu = () => {

  return (
    <div className="w-100">
      <Navbar className="nav" expand="md" fixed="top" >
        <div className="container" >
          <NavbarBrand className="logoNav" >
            <Link to='/'>
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </NavbarBrand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto" style={{ alignContent: 'center' }}>
            <Nav>
              <Nav.Link className="navLink" href="/films">Films</Nav.Link>
              <Nav.Link className="navLink" href="/people">People</Nav.Link>
              <Nav.Link className="navLink" href="/planets">Planets</Nav.Link>
              <Nav.Link className="navLink" href="/species">Species</Nav.Link>
              <Nav.Link className="navLink" href="/planets">Vehicles</Nav.Link>
              <Nav.Link className="navLink" href="/species">Starships</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Menu;