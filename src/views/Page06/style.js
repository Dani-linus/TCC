import { Dimensions, StyleSheet, PixelRatio } from "react-native";

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
  container: {
    flex: 1,
    backgroundColor: "#56B2EB",
  },
  badWolfStyle: {
    position: 'absolute',
    width: wp(90),
    height: hp(90),
    bottom: 0,
    left: 20,
  },
  toggleView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    opacity: 0.7,
    position: 'absolute',
  },
  togglebadWolf: {
    left: wp(35),
    top: wp(35.5),
  },

})

export default styles;