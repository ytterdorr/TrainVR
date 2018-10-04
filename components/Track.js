import React, { Component } from "react";
import PropTypes from "prop-types";
import { Model, asset } from "react-vr";

class Track extends Component {
  state = {};
  render() {
    return (
      <Model
        source={{
          obj: asset("Rails_OBJ.obj")
        }}
        style={{
          color: this.props.color,
          transform: [
            { translate: this.props.translate },
            { scale: this.props.scale },
            { rotateX: 270 },
            { rotateZ: this.props.rotateZ }
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
  rotateZ: PropTypes.number,
  color: PropTypes.string
};

export default Track;
