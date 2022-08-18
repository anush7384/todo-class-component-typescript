import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import Heading from "./Components/Heading/Heading";
import List from "./Components/List/List";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo App</Link>
              </li>
              <li>
                <Link to="/bookmark">Bookmark App</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/todo"
              element={
                <>
                  <Heading /> <List />{" "}
                </>
              }
            ></Route>
            <Route path="/bookmark"></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
