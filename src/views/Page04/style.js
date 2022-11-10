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
    },
    view_animation_cover: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flex: 1
    },
    view_animation: {
        flex: 1,
        flexDirection: 'row',
    },
    img_frontStructure:{
        width:60,
        height:40,
        top:60,
        left:500
    },
    presentation: {
        position: 'absolute',
        width: wp(100),
        height: hp(100),
        bottom: wp(-5),
        right: wp(-10),
    },
    woodHouse:{
        resizeMode: 'contain',
        height: hp(51),
        position: 'absolute',
        left: wp(6),
        top: wp(3),
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
        left: wp(36),
        top: wp(15),
    },
});
export default styles;