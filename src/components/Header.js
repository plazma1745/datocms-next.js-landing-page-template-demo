import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

export default function Header() {
  return (
    <div className={"header"}>
      <Navbar bf={"light"} expand="md">
        <Container>
          <Navbar.Brand href="/">Your Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="#services">Услуги</Nav.Link>
              <Nav.Link href="#about-us">О нас</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
