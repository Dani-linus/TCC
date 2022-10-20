// Arquivo de styles da página 2 (screen 2)

import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56B2EB'
    },
    // view_animation_cover: {
    //     position: 'absolute',
    //     width: '100%',
    //     bottom: 0,
    //     flex: 1
    // },
    view_animation: {
        flex: 1,
        flexDirection: 'row',
    },
    view_pig_father_pig_mom: {
        // position: 'absolute',
        width: Dimensions.get('window').width / Dimensions.get('window').scale,
        height: Dimensions.get('window').height / Dimensions.get('window').scale,
        left: '7%',
        top: '14%',
        borderWidth: 1,
    },
    // animation_view_pig_father_pig_mom: {
    //     width: '104%',
    //     height: '74%',
    //     position: 'absolute',
    // },

});
export default styles;
