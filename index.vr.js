import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated
} from "react-vr";
import Track from "./components/Track";
import LeftTrack from "./components/LeftTrack";
import RightTrack from "./components/RightTrack";

export default class TrainVR extends React.Component {
  constructor() {
    super();
    this.state = {
      trainX: new Animated.Value(-10)
    };
  }

  componentDidMount() {
    this.moveTrain();
  }

  moveTrain = () => {
    this.state.trainX.setValue(-50);
    Animated.timing(this.state.trainX, {
      toValue: 20,
      duration: 15000
    }).start();
  };

  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <View>
        <Pano source={asset("BIG_Bratcevo_Equirectangular.jpg")} />
        <LeftTrack />
        <Track
          translate={[-20, -1.5, -6]}
          scale={[0.001, 0.001, 0.001]}
          rotateZ={-10}
          color={"green"}
        />
        <RightTrack color={"green"} />

        <Model
          source={{
            obj: asset("Rails_OBJ.obj")
          }}
          style={{
            color: "black",
            transform: [
              { translate: [-90, -1.5, -8] },
              { scale: [0.005, 0.001, 0.001] },
              { rotateX: 270 }
            ]
          }}
          wireframe={false}
        />

        {
          // Train
        }
        <AnimatedModel
          source={{
            obj: asset("toy-train.obj"),
            mtl: asset("toy-train.mtl")
          }}
          style={{
            color: "blue",
            transform: [
              { translate: [-10, -1.5, -8] },
              { translateX: this.state.trainX },
              { rotateY: 90 }
            ]
          }}
          wireframe={false}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("TrainVR", () => TrainVR);
