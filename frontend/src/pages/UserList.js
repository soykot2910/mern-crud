import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    loadUsers();
  };

  return (
    <Container className="py-5">
      <h1 className="py-2">Home Page</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link
                  to={`/edit-user/${user._id}`}
                  className="btn btn-outline-secondary m-2"
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger m-2"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
