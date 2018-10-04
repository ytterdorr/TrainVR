import React, { Component, View, Model } from "react";
import Track from "./Track";

class RightTrack extends Component {
  state = { color: "black" };
  render() {
    return (
      <Track
        translate={[4, -1.5, -4]}
        scale={[0.001, 0.001, 0.001]}
        rotateZ={0}
        color={this.props.color}
      />
    );
  }
}

export default RightTrack;
