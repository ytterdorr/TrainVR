import React, { Component } from "react";
import PropTypes from "prop-types";

class Track extends Component {
  state = {};
  render() {
    return (
      <Model
        source={{
          obj: asset("Rails_OBJ.obj")
        }}
        style={{
          color: "black",
          transform: [
            { translate: this.props.translate },
            { scale: this.props.scale },
            { rotateX: 270 }
          ]
        }}
        wireframe={false}
      />
    );
  }
}

Track.PropTypes = {
  scale: PropTypes.array,
  translate: PropTypes.array,
  rotateY: PropTypes.number
};

export default Track;
