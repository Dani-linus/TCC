import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "black",
        // padding: 5,
        // borderWidth:2, borderColor:'gray'
    },
    btn_dimensoes:{
        width: 50,
        height: 50,
    },
    btn_play:{
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
    text_white: {
        color: "white",
        fontFamily: 'PatrickHand',
    },
    text_black: {
        color: "black",
        fontFamily: 'PatrickHand',
    },
    text_1:{
        fontSize: 40,
        lineHeight: 50,
    },
    text_2:{
        fontSize: 70,
        lineHeight: 75,
    },
    view_modals:{
        flexDirection: "row", 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    wrap:{
        padding:20,
        margin:20,
        borderradius:8,
        backgroundcolor:"#2D3953",
        shadowColor:"#4048BF",
        shadowOffset:{
            width:8.4, 
            height:8.4},
        shadowOpacity:0.7,
        shadowRadius:30,
        elevantion:10
    },
    center:{
        justifyContent: 'center', 
        alignItems: 'center'
    },

});

export default styles;