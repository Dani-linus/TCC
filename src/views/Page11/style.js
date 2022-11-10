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
    view_pigs:{
        position: 'absolute',
        width: wp(80),
        top: wp(3),
        left: wp(16),
    },
    view_wolf:{
        position: 'absolute',
        width: wp(28),
        top: wp(7),
        left: wp(8),
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
    togglewolf: {
      left: wp(35),
      top: wp(24),
    },
})

export default styles;