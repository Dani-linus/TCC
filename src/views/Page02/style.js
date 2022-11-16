import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56B2EB'
    },
    view_animation: {
        flex: 1,
        flexDirection: 'row',
    },
    pig_father_pig_mom: {
        position: 'absolute',
        width: wp(60),
        height: hp(60),
        top: wp(7),
        left: wp(-6),
    },
    togglePigs:{
      left: wp(17),
      top: wp(29),
    },
    toggleView:{
      position: 'absolute', 
      width: 30, 
      height: 30, 
      borderRadius: 50, 
      backgroundColor: 'white', 
      elevation: 2,
      opacity: 0.8,
  },
});
export default styles;
