import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt1:{
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize: 26,
        lineHeight: 70

    },
    tx2:{
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize: 24,
        lineHeight: 75
    },
    view_txt:{
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        backgroundColor: '#A8D7F5',
        borderRadius: 20,
    },
    btn_restart: {
        marginHorizontal: 300,
        marginTop: 20,
        padding: 3,
    },
    text_black: {
        color: "black",
        fontFamily: 'FuzzyBubbles-Bold',
    },
})

export default styles;