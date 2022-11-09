import { Dimensions, StyleSheet,  PixelRatio  } from "react-native";

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

const wp = widthPercent => {
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(Width * elemWidth / 100);
};

const hp = heightPercent => {
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel(Height * elemHeight / 100);
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#56B2EB",
    },
    view_wolf:{
        position: 'absolute',
        width: wp(120),
        top: wp(-3),
        left: wp(-12),
    },
    toggleView: {
      width: 30,
      height: 30,
      borderRadius: 40,
      backgroundColor: 'white',
      opacity: 0.7,
      position: 'absolute',
    },
    togglewolf: {
      left: wp(19),
      top: wp(36),
    },
})

export default styles;