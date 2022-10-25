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
        height: hp(52),
        left: wp(21),
        top: wp(23),
    },
    view_pig_sleepling: {
        position: 'absolute',
        width: wp(40),
        height: hp(60),
        top: wp(7.5),
        left: wp(60),
        // borderWidth: 1
    },
    toggleView:{
        width: 40, 
        height: 40, 
        borderRadius: 50, 
        backgroundColor: 'white', 
        opacity: 0.6,
        position: 'absolute', 
    },
    togglePigMom:{
        left: wp(34.5),
        top: wp(35),
    },
    togglePigSleeping:{
        top: wp(30),
        left: wp(77.5),
    }
});
export default styles;