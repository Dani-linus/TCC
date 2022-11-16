import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

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
        left: wp(10),
        top: wp(11.5),
    },
    view_pig_sleepling: {
        position: 'absolute',
        width: wp(40),
        height: hp(60),
        top: wp(4),
        left: wp(30),
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
    togglePigMom:{
        left: wp(34.5),
        top: wp(30),
    },
    togglePigSleeping:{
        top: wp(27),
        left: wp(78.5),
    }
});
export default styles;