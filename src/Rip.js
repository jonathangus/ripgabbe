import React from "react";

export default class extends React.Component {
  componentDidMount() {
    new Audio("/music.mp3").play();
  }
  render() {
    return (
      <div className="rip">
        <div className="logo">
          <img
            className="cab"
            src="https://static.cabonline.com/cabonline/c093c142926a4d6da7f549c2da3a6a93.svg"
          />
          <div className="fire">
            <img src="https://media.giphy.com/media/oZYBdbW7TnhEQ/giphy.gif" />
            <img src="https://media.giphy.com/media/oZYBdbW7TnhEQ/giphy.gif" />
            <img src="https://media.giphy.com/media/oZYBdbW7TnhEQ/giphy.gif" />
            <img src="https://media.giphy.com/media/oZYBdbW7TnhEQ/giphy.gif" />
          </div>
        </div>
        <div className="content">
          <h1>RIP GABBE</h1>
          <h2>2008 - 2018</h2>
        </div>

        <video loop playsInline muted autoPlay preload="true">
          <source src="/bg.mp4" />
        </video>
      </div>
    );
  }
}
