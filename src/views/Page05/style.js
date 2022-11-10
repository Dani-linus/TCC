import { Dimensions, StyleSheet,  PixelRatio } from "react-native";

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
    presentation: {
        position: 'absolute',
        width: wp(100),
        height: hp(100),
        bottom: wp(-5),
        left: wp(-14),
    },
    brickHouse:{
      resizeMode: 'contain',
      position: 'absolute',
      height: hp(60.5),
      left: wp(-8.4),
      top: wp(4.8),
  },
    toggleView:{
      position: 'absolute', 
      backgroundColor: 'white', 
      width: 30, 
      height: 30, 
      borderRadius: 50, 
      opacity: 0.8,
      elevation: 2,
  },
    toggleHouse:{
      left: wp(42),
      top: wp(19),
  },
})

export default styles;