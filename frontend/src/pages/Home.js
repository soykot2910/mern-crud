import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Home() {
  const [users, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState([5]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/api/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    loadUsers();
  };

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentUsers.map((user, index) => (
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
        <Pagination
          postsPerPage={usersPerPage}
          totalPosts={users.length}
          paginate={paginate}
        />
      </Table>
    </Container>
  );
}
