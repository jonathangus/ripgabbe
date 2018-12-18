import React from "react";

export default class extends React.Component {
  componentDidMount() {
    new Audio("/music.mp3").play();
  }
  render() {
    return (
      <div className="rip">
        <div className="content">
          <h1>RIP GABBE</h1>
          <h2>2008 - 2018</h2>
        </div>

        <video src="/bg.mp4" loop playsInline muted autoPlay preload="true" />
      </div>
    );
  }
}
