import React from 'react';
/* import { FaBars } from 'react-icons/fa';
 */import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap';
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

          <Nav className="ml-auto" style={{ alignContent: 'center' }}>
            <NavLink className="navLink" href="/films">Films</NavLink>
            <NavLink className="navLink" href="/people">People</NavLink>
            <NavLink className="navLink" href="/planets">Planets</NavLink>
            <NavLink className="navLink" href="/species">Species</NavLink>
            <NavLink className="navLink" href="/planets">Vehicles</NavLink>
            <NavLink className="navLink" href="/species">Starships</NavLink>
          </Nav>
        </div>
      </Navbar>
    </div>
  )
}

export default Menu;