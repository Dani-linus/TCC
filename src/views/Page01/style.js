// Arquivo de styles da página 1 (screen 1)
import { Dimensions, PixelRatio, StyleSheet } from "react-native";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//var deviceWidth = Dimensions.get('screen').width;
//var deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_animation_cover: {
        position: 'absolute',
        width: '100%',
       bottom: 0,
        flex:1
   },
    view_animation: {
        flex: 1,
        flexDirection: 'row',
    },
    view_pig_mom: {
        position: 'relative',
        //   width: wp(22),
        left: 123,
        top: 79.7,
    },
    view_pig_sleepling: {
        position: 'absolute',
        width: Dimensions.get("window").width * 0.2,
        height: Dimensions.get("window").height * 1.0,
        left: Dimensions.get("window").width * 0.68,
        top: Dimensions.get("window").height * 0.46,
        //right: Dimensions.get("window").height * 0.71
    },
    animation_view_pig_sleepling:{
        width:'101%',
        height:'42%',
        position: 'absolute',
    }

});
export default styles;