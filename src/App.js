import React, { Component } from "react";
import "./App.css";
import Images from "./Images";
import Explosion from "./Explosion";
import Rip from "./Rip";
import Preload from "preload-it";

class App extends Component {
  state = {
    show: "images"
  };

  componentDidMount() {
    const preload = Preload();
    preload.fetch([
      "/bg.mp4",
      "https://media.giphy.com/media/oZYBdbW7TnhEQ/giphy.gif",
      "/boat.mp4",
      "/vinit.mp4",
      "/music.mp3",
      "/daniel.png",
      "/hannajonte.png"
    ]);
    preload.oncomplete = () => {};
    preload.onprogress = () => {};
    preload.onfetched = () => {};
  }
  render() {
    const { show } = this.state;

    return (
      <div className="container">
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
    );
  }
}

export default App;
