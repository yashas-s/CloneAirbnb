import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.jpg';
import React from 'react';

const Header=() => {
    return (
      <>
      <Navbar >
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top ms-5"
            />
          </Navbar.Brand>
      </Navbar>
    </>
    );
  }
  
  export default Header;