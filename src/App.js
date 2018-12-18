import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Images from "./Images";
import Explosion from "./Explosion";
import Rip from "./Rip";

class App extends Component {
  state = {
    show: "images"
  };
  render() {
    const { show } = this.state;

    return (
      <div className="container">
        <div className="wrap">
          {show === "images" && (
            <Images
              onDone={() => {
                this.setState({ show: "explosion" });
              }}
            />
          )}
          {show === "explosion" && (
            <Explosion
              onDone={() => {
                this.setState({ show: "rip" });
              }}
            />
          )}
          {show === "rip" && <Rip />}
        </div>
      </div>
    );
  }
}

export default App;
