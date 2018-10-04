import React, { Component } from "react";
import Track from "./Track";

class LeftTrack extends Component {
  state = { color: "black" };
  render() {
    return (
      <Track
        translate={[-2, -1.5, -8]}
        scale={[0.0017, 0.001, 0.001]}
        rotateZ={0}
        color={"blue"}
      />
    );
  }
}

export default LeftTrack;
