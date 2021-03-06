import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

export default function NavBar() {
  var arr = window.location.href.split("/");

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">MERN CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/post">All Post</Nav.Link>
              <Nav.Link href="/userList">UserList</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {arr[3] !== "post" ? (
                <Nav.Link href="/add-user">
                  <Button variant="outline-primary">Add User</Button>
                </Nav.Link>
              ) : (
                <Nav.Link href="/add-post">
                  <Button variant="outline-primary">Add Post</Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
