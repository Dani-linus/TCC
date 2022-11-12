import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt1:{
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize: 30,
    },
    messageEnd:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btnEnd:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btn: {
        marginHorizontal: 10,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#A8D7F5',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_black: {
        color: "black",
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize: 18,
    },
})

export default styles;