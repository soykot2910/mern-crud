import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/posts");
    setPosts(data);
  };

  return (
    <Container className="text-center py-3">
      <h1 className="py-2">All Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col lg={3} md={4} sm={6} className="my-2">
            <Card>
              <Card.Title className="py-2">{post.title}</Card.Title>
              <Card.Img src={post.imgCollection} height="200px" />
              <Card.Body>
                <Card.Text>{post.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
