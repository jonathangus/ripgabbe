import React from "react";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default class extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        items: [
          ...this.state.items,
          {
            left: random(0, window.innerWidth),
            top: random(0, window.innerHeight),
            maxWidth: random(30, 100),
            transform: `rotate(${random(0, 360)}deg)`
          }
        ]
      });
    }, 1500);
    // let x = window.innerWidth / 2;
    // let y = window.innerHeight / 2;
    // const el = document.getElementById("jontface");

    // const draw = () => {
    //   var dx = 2;
    //   var dy = -2;

    //   const width = window.innerWidth;
    //   const height = window.innerHeight;

    //   const size = 100;

    //   if (x + dx > width  || x + dx ) {
    //     dx = -dx;
    //   }
    //   if (y + dy > height  || y + dy < size) {
    //     dy = -dy;
    //   }

    //   x += dx;
    //   y += dy;

    //   el.style.top = y + "px";
    //   el.style.left = x + "px";
    //   window.requestAnimationFrame(draw);
    // };

    // window.requestAnimationFrame(draw);
  }
  render() {
    return (
      <div>
        {this.state.items.map((item, i) => (
          <div key={i} style={{ ...item }} className="jontface">
            <img src="/jontexd.png" />
          </div>
        ))}
      </div>
    );
  }
}
