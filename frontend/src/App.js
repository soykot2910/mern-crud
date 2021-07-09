import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Post from "./pages/Post";
import Error from "./pages/Error";
import AddUser from "./pages/AddUser";
import AddPost from "./pages/AddPost";
import EditUser from "./pages/EditUser";
import UserList from "./pages/UserList";
export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/userList" component={UserList} />
        <Route exact path="/" component={Post} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/add-user" component={AddUser} />
        <Route exact path="/add-post" component={AddPost} />
        <Route exact path="/edit-user/:id" component={EditUser} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
