import React from "react";
import { AppRegistry, asset, Pano, Text, View, Model } from "react-vr";

export default class TrainVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("BIG_Bratcevo_Equirectangular.jpg")} />
        {/* <Model
          source={{
            obj: asset("rails_formats.obj")
            //mtl: asset("Rails_OBJ.obj")
          }}
          style={{
            color: "black",
            transform: [
              { translate: [-5, -1.5, -5] },
              { scale: 0.01 },
              { rotateY: 90 }
            ]
          }}
          wireframe={true}
        /> */}
        <Model
          source={{
            obj: asset("Rails_OBJ.obj")
          }}
          style={{
            color: "black",
            transform: [
              { translate: [0, -1.5, -5] },
              { scale: 0.001 },
              { rotateX: 270 }
            ]
          }}
          wireframe={false}
        />
        <Model
          source={{
            obj: asset("toy-train.obj"),
            mtl: asset("toy-train.mtl")
          }}
          style={{
            color: "blue",
            transform: [{ translate: [-5, -1.5, -5] }, { rotateY: 90 }]
          }}
          wireframe={false}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("TrainVR", () => TrainVR);
