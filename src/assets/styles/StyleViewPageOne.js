// arquivo de estilo da página 1
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    a_pig_mom:{
        width: '160%',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    a_pig_spleeping:{
        width: '96%',
        // borderWidth: 1,
        // borderColor: 'blue',
     },
     view_animation:{
        position: 'absolute',
        width: 110,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'green',
    },
    view_pig_mom:{
        left: 241,
        top: 190,
    },
    view_pig_sleepling:{
        left: 525,
        top: 160,
    }
});
export default styles;