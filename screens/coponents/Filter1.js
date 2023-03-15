import React from "react";
import {Image, View} from "react-native";


const Filter1 = ({
  face:{
    bounds:{
      size:{ width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition,
    noseBasePosition
  }
}) => {
  }
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
        (rightEyePosition.x - leftEyePosition.x)
    )
  ) =>(angleRad * 180) / Math.PI;

  <Image
    source={require("../assets/crown-pic1.png")}
    style={{
      widht: filterWidht,
      height: filterHeight,
      resizeMode: "contain",
      transform: [{ rotate: '${transformAngle()}deg'}]
    }}
    />


const styles = StyleSheet.create({
  UpperContainer: AppName
  MiddleContainer: CameraSection
  LowerContainer: AcionSection
})