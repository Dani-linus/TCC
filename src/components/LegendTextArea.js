import React , {useContext}from "react"
import * as Animatable from "react-native-animatable";
import { StyleSheet, PixelRatio } from "react-native";

function LegendTextArea(props) {
    return (
        <Animatable.View
            animation="zoomIn"
            delay={1000}
            easing={'ease-in'}
            duration={500}
            style={[styles.viewtxt]}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={3000}
                    duration={500}
                    style={[styles.text_black, styles.text_modal_options]}>

                    {props.text}
                </Animatable.Text>
        </Animatable.View>
        
    )
}
export default LegendTextArea;

const styles = StyleSheet.create({
    viewtxt:{
        backgroundColor: "#F5F5F5",
        padding: 5,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
        marginHorizontal: '10%',
        position: 'absolute'
    },
    text_black: {
        color: "black",
        fontFamily: 'FuzzyBubbles-Bold',
    },
    text_modal_options:{
        fontSize: 14 * PixelRatio.getFontScale(),
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})