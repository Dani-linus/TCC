// Arquivo de styles da página 1 (screen 1)
import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56B2EB'
    },
    view_animation_cover: {
        position: 'absolute',
        // width: '90%',
        // bottom: 0,
        // flex:1
   },
    // view_animation: {
    //     flex: 1,
    //     flexDirection: 'row',
    // },
    // view_pig_mom: {
    //     position: 'absolute',
    //     width: Dimensions.get("window").width * 0.27,
    //     height: Dimensions.get("window").height * 1,
    //     left: Dimensions.get("window").width * 0.14,
    //     top: Dimensions.get("window").height * 0.07,
    // },
    // animation_view_pig_mom:{
    //     width:'86%',
    //     height:'70%',
    //     // position: 'absolute',
    // },
    view_pig_sleepling: {
        position: 'absolute',
        flex:1,
        // width: Dimensions.get("window").width * 0.1,
        // height: Dimensions.get("window").height * 1,
        left: Dimensions.get("window").width * 0.73,
        top: Dimensions.get("window").height * 0.12,
    },
    // animation_view_pig_sleepling:{
    //     width:'102%',
    //     height:'46%',
    //     position: 'absolute',
    // }

});
export default styles;