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
        top: wp(6.4),
        left: wp(-7),
    },
    togglePigs:{
      left: wp(15),
      top: wp(32),
    },
    toggleView:{
      position: 'absolute', 
      width: 40, 
      height: 40, 
      borderRadius: 50, 
      backgroundColor: 'white', 
      elevation: 2,
      opacity: 0.8,
  },
});
export default styles;
