import React, { Component } from "react";
import "./App.css";
import posed from "react-pose";

const list = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

const Image = posed.div({
  hide: {
    opacity: 0,
    scale: 0.9,
    y: 10
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  done: {
    opacity: 0.8,
    scale: 0.9,
    y: 0
  }
});

class Images extends Component {
  state = {
    visible: 0
  };

  componentDidMount() {
    const time = 2500;

    setInterval(() => {
      this.setState({
        visible: this.state.visible + 1
      });
    }, time);

    setTimeout(this.props.onDone, time * list.length);
  }

  render() {
    const count = this.state.visible;

    return (
      <div>
        {list.map((l, i) => {
          let posed = "hide";
          if (i === count) {
            posed = "show";
          } else if (i < count) {
            posed = "done";
          }

          console.log({ posed });

          return (
            <Image pose={posed} key={l}>
              <img alt="" src={l} />
            </Image>
          );
        })}
      </div>
    );
  }
}

export default Images;
