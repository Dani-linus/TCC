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
    view_wolf:{
        position: 'absolute',
        width: wp(33),
        top: wp(6),
        left: wp(11),
    },
    view_pigs:{
        position: 'absolute',
        width: wp(80),
        top: wp(1),
        left: wp(15)
    },
     toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 20,
      height: 20,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 2,
    },
    togglebadWolf: {
      left: wp(45),
      top: wp(24),
    },
})

export default styles;