// Arquivo de style da página 4 (screen 4)

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
    img_frontStructure:{
        width:60,
        height:40,
        top:60,
        left:500
    }
});
export default styles;