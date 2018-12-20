import React from "react";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const faces = ["/jontexd.png", "/david.png", "/viktor.png", "/erik.png"];

export default class extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    let count = 0;
    const time = window.innerWidth < 600 ? 2000 : 150;

    setInterval(() => {
      let image;

      if (faces[count]) {
        image = faces[count];
      } else {
        count = 0;
        image = faces[count];
      }
      count = count + 1;

      this.setState({
        items: [
          ...this.state.items,
          {
            left: random(0, window.innerWidth),
            top: random(0, window.innerHeight),
            maxWidth: random(30, 100),
            transform: `rotate(${random(0, 360)}deg)`,
            image
          }
        ]
      });
    }, time);
  }
  render() {
    return (
      <div>
        {this.state.items.map((item, i) => {
          const { image, ...style } = item;
          return (
            <div key={i} style={{ ...style }} className="jontface">
              <img src={image} />
            </div>
          );
        })}
      </div>
    );
  }
}
