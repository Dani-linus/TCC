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
    view_pig_speak:{
        position: 'absolute',
        width: wp(90),
        height: hp(90),
        top: wp(3),
        right: wp(-6),
    },
    view_wolf:{
        position:'absolute',
        width: wp(50),
        // height: hp(50),
        top: wp(3),
        left: wp(4),
    },
    toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 2,
    },
    togglebadWolf: {
      left: wp(44),
      top: wp(27),
    },
})

export default styles;