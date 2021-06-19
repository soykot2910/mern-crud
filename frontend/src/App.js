import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add-user" component={AddUser} />
        <Route exact path="/edit-user/:id" component={EditUser} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
