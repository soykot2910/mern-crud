import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

export default function EditUser() {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/users/${id}`, user);
    history.push("/");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/api/users/${id}`);
    console.log(result.data);
    setUser(result.data);
  };

  return (
    <Container>
      <div className="form-wrapper text-center py-5">
        <h1>Edit A User</h1>
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
            type="string"
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
            <Button size="lg" variant="warning" type="sumbit">
              Update User
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
