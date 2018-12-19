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
    visible: -1
  };

  componentDidMount() {
    const time = 2000;
    this.setState({
      visible: 0
    });
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
      <div className="images">
        <div className="images-inner">
          {list.map((l, i) => {
            let posed = "hide";
            if (i === count) {
              posed = "show";
            } else if (i < count) {
              posed = "done";
            }

            return (
              <Image pose={posed} key={l}>
                <img alt="" src={l} />
              </Image>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Images;
