import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

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
      position: 'absolute',
      height: wp(60),
      left: wp(0.1),
      top: wp(-2.6),
  },
    toggleView:{
      position: 'absolute', 
      backgroundColor: 'white', 
      width: 40, 
      height: 40, 
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