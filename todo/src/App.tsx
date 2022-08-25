import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Heading from "./Components/Heading/Heading";
import List from "./Components/List/List";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Heading /> <List />{" "}
                </>
              }
            ></Route>
            <Route path="/bookmark"></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
