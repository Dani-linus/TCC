import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56B2EB'
    },
    presentation: {
        position: 'absolute',
        width: wp(100),
        height: hp(100),
        bottom: wp(-5),
        left: wp(-14),
    },
    view_animation: {
        flex: 1,
        flexDirection: 'row',
    },
    img_door:{
    resizeMode: 'cover',
    width:60,
    },
    pointStyle: {
        height: 22,
        width: 22,
        marginTop: 5,
        position: 'absolute',
        borderRadius: 14,
        backgroundColor: '#00FF30',
    },
    strawHouse:{
        position: 'absolute',
        width: wp(107),
        left: wp(-0.4),
        top: wp(-2.5),
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
        left: wp("77%"),
        top: wp("23%"),
    },
});
export default styles;