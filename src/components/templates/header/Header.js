import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
const Header = () => {
  const NavBar = styled(Navbar)`
    background-color: #212121;
    a {
      color: #fff;
    }
    a:hover {
      color: 12a8e0;
    }
  `;
  return (
    <>
      <NavBar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href={Navigation[0].url}>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {Navigation.map((link) => {
                return (
                  <Nav.Link
                    key={link.name}
                    target={link.target}
                    href={link.url}
                  >
                    {link.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavBar>
    </>
  );
};
export default Header;
