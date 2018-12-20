import React from "react";
import Vinit from "./Vinit";
import HannJont from "./HannJont";
import JontFace from "./JontFace";
import Daniel from "./Daniel";
import Boat from "./Boat";
import Quotes from "./Quotes";

export default class extends React.Component {
  play() {
    if (this.played) return;
    new Audio("/music.mp3").play();
    this.played = true;
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
          <img src="https://media3.giphy.com/media/3oFzmrqh43AvYwn9Cw/200.webp?cid=3640f6095c1a2a826542686751565834" />
          <div>
            <h1>RIP GABBE</h1>
            <h2>2008 - 2018</h2>
          </div>

          <div className="sound" onClick={() => this.play()}>
            <b>🔊</b>
            <span>🔊🔊 Sound ON 🔊🔊🔊</span>
          </div>
        </div>
        <div className="mainVid">
          <video loop playsInline muted autoPlay preload="true">
            <source src="/bg.mp4" />
          </video>

          <Daniel />
        </div>
        <Vinit />
        <HannJont />
        <JontFace />
        <Boat />
        <Quotes />
      </div>
    );
  }
}
