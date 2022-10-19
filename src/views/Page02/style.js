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
        position: 'absolute',
        width: Dimensions.get("window").width * 0.24,
        height: Dimensions.get("window").height * 1,
        left: Dimensions.get("window").width * 0.13,
        top: Dimensions.get("window").height * 0.05,
    },
    // animation_view_pig_father_pig_mom: {
    //     width: '104%',
    //     height: '74%',
    //     position: 'absolute',
    // },

});
export default styles;
