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
    view_caldeirao:{
        position: 'absolute',
        width: wp(100),
        left: wp(-10.5),
    },
    toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 40,
      opacity: 0.8,
      elevation: 2,
    },
    toggleCauldron: {
      left: wp(23),
      top: wp(29),
    },
    shout:{
      flex: 1,
      justifyContent: 'flex-end',
    },
    txt1:{
      fontFamily: 'FuzzyBubbles-Bold',
      fontSize: 26,
      lineHeight: 70
    },
  });

export default styles;