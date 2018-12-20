import React from "react";
import posed from "react-pose";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const QQ = posed.div({
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
});

const qoutes = [
  {
    name: "Riccardo",
    text: "Älskar dig mest booboo"
  },
  {
    name: "Anders",
    text: "John Scott??"
  },
  {
    name: "Jonte",
    text: "Gabbe??? Gabbe Gabbe Gabbe"
  },
  {
    text: "Superlike på den",
    name: "random på tinder"
  },
  {
    text: "Mums mums mums",
    name: "kvinna 43, 02:12 på Lemonbar"
  }
];

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: qoutes.map(q => ({
        ...q,
        style: {
          left: random(100, window.innerWidth - 250),
          top: random(100, window.innerHeight - 250),
          transform: `rotate(${random(-20, 20)}deg)`
        }
      })),
      count: 0
    };
  }

  componentDidMount() {
    const int = setInterval(() => {
      const { count } = this.state;
      let newCount;

      if (qoutes[count + 1]) {
        newCount = count + 1;
      } else {
        newCount = 0;
      }
      this.setState({
        count: newCount
      });

      if (count > 100) {
        clearInterval(int);
      }
    }, 2250);
  }
  render() {
    return (
      <div>
        {this.state.items.map((item, i) => {
          return (
            <div key={i} style={{ ...item.style }} className="quoute">
              <QQ pose={i === this.state.count ? "show" : "hide"}>
                <h3>
                  {item.text} <div className="name">- {item.name}</div>
                </h3>
              </QQ>
            </div>
          );
        })}
      </div>
    );
  }
}
