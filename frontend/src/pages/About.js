import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function About() {
  let history = useHistory();
  const [post, setPost] = useState({
    title: "",
    des: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    await axios.post("http://localhost:4000/api/posts", post);
    history.push("/");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-wrapper text-center py-5">
      <Container>
        <h1>Add A New Post</h1>
        <Form onSubmit={(e) => handleSubmit(e)} className="input-form">
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Post Name"
            name="title"
            value={post.title}
            onChange={(e) => handleChange(e)}
          />
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="des"
              value={post.des}
              rows={3}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <div className="d-grid">
            <Button size="lg" type="sumbit">
              Add Post
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
