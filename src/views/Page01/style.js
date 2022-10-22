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
    container: {
        flex: 1,
        backgroundColor: '#56B2EB'
    },
    view_animation_cover: {
        position: 'absolute',
   },
    view_pig_mom: {
        position: 'absolute',
        width: wp(32),
        height: hp(62),
        marginLeft: wp(22),
        marginTop: wp(18),
    },
    view_pig_sleepling: {
        position: 'absolute',
        width: wp(40),
        height: hp(60),
        marginTop: wp(13),
        left: wp(60),
        borderWidth: 1
    },

});
export default styles;