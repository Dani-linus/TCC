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
    view_wolfBlowing:{
        position: 'absolute',
        width: wp(100),
        top: wp(0),
        left: wp(-1),
    },
    toggleView: {
      backgroundColor: 'white',
      position: 'absolute',
      width: 25,
      height: 25,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 2,
    },
    togglewolfBlowing: {
      left: wp(40),
      top: wp(24),
    },
})

export default styles;