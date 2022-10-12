// arquivo de estilo da página 1
import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var deviceWidth = Dimensions.get('screen').width;
var deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_animation_cover:{
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
     view_animation:{
        flex:1,
        flexDirection: 'row',
    },
    view_pig_mom:{
        position: 'relative',
        width: wp(22),
        left: 123,
        top: 79.7,
    },
    view_pig_sleepling:{
        position: 'absolute',
        width: wp(10.5),
        left: 307.3,
        top: 70,
    }
});
export default styles;