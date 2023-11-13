import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home"><h1>TO DO LIST</h1></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
