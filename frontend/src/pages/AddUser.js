import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", user);
    history.push("/");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-wrapper text-center py-5">
      <Container>
        <h1>Add A User</h1>
        <Form onSubmit={(e) => handleSubmit(e)} className="input-form">
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Your User Name"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Your Phone"
            name="phone"
            value={user.phone}
            onChange={(e) => handleChange(e)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Your Website"
            name="website"
            value={user.website}
            onChange={(e) => handleChange(e)}
          />
          <div className="d-grid">
            <Button size="lg" type="sumbit">
              Add User
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
