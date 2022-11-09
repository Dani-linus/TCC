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
        // height: hp(60),
        top: wp(0),
        left: wp(3),
    } ,
     toggleView: {
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: 'white',
      opacity: 0.7,
      position: 'absolute',
    },
    togglebadWolf: {
      left: wp(41),
      top: wp(35),
    },
})

export default styles;