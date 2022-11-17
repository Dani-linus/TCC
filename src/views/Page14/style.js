import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#56B2EB",
    },
    view_caldeirao:{
        position: 'absolute',
        width: wp(100),
        left: wp(-10.5),
    },
    toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 40,
      height: 40,
      borderRadius: 40,
      opacity: 0.8,
      elevation: 2,
    },
    toggleCauldron: {
      left: wp(23),
      top: wp(29),
    },
    shout:{
      flex: 1,
      justifyContent: 'flex-end',
    },
    txt1:{
      fontFamily: 'FuzzyBubbles-Bold',
      fontSize: 26,
      lineHeight: 70
    },
  });

export default styles;