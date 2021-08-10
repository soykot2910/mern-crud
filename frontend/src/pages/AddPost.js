import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function About() {
  let history = useHistory();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [imgCollection, serImageCollection] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
    }
    formData.append("title", title);
    formData.append("description", description);
    await axios.post("http://localhost:5000/api/posts", formData, {});
    console.log(formData);

    history.push("/post");
  };

  return (
    <div className="form-wrapper text-center py-5">
      <Container>
        <h1>Add A New Post</h1>
        <Form onSubmit={handleSubmit} className="input-form">
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Post Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              value={description}
              name="description"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="mb-3 form-control">
            <input
              type="file"
              name="imgCollection"
              onChange={(e) => serImageCollection(e.target.files)}
              multiple
            />
          </div>
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
