/* eslint-disable jsx-a11y/alt-text */
import './Navbar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import React from 'react';


import CartWidget from './CartWidget';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
          <div>
              <img src={logo}/>
          </div>
            <CartWidget />
            {/* <Link className="link-light" to="#">Productos</Link>
            <Link className="link-light" to="#">Servicios</Link>
            <Link className="link-light" to="#">Nosotros</Link> */}
          </div>
        </nav>
      </div></>
  )
}

export default Navbar