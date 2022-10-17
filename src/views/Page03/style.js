// Arquivo de style da página 3 (screen 3)

import { Dimensions, StyleSheet } from "react-native";

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
});
export default styles;