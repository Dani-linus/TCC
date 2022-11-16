import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

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