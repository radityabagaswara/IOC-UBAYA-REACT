import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./TopNav.css";
import { NavLink } from "react-router-dom";

const TopNav = (props) => {
  return (
    <section id="navbar" className="fixed-top navtop">
      <header id="header">
        <div className="container">
          <Navbar bg="default" expand="md">
            <Navbar.Brand className="mr-auto">
              <h1 className="logo">UBAYA IOC</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink exact to="/" className="navlist nav-link active">
                  <p>Beranda</p>
                </NavLink>
                <NavLink to="#" className="navlist nav-link">
                  <p>Tentang Kami</p>
                </NavLink>
                <NavLink to="#" className="navlist nav-link">
                  <p>Galeri</p>
                </NavLink>
                <NavLink to="#" className="navlist nav-link">
                  <p>Blog</p>
                </NavLink>
                <NavLink to="#" className="navlist nav-link">
                  <p>Kontak Kami</p>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </section>
  );
};

export default TopNav;
