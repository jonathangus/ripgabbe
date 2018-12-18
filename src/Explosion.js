import React from "react";

export default class extends React.Component {
  componentDidMount() {
    setTimeout(this.props.onDone, 4000);
  }

  render() {
    return (
      <div className="expl">
        <img src="https://cdn.pbrd.co/images/mYwKJYJI.gif" />
      </div>
    );
  }
}
