import "./App.css";
import React from "react";
import Heading from "./Components/Heading/Heading";
import List from "./Components/List/List";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Heading />
          <List />
        </div>
      </>
    );
  }
}

export default App;
