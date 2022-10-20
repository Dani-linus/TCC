//Componente para renderizar as legendas da história em cada página,
// basta chamar o componente e passar o texto desejado para a props text

import React from "react"
import * as Animatable from "react-native-animatable";
import { StyleSheet } from "react-native";

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
                    delay={2000}
                    duration={500}
                    style={[styles.text_black, styles.text_modal_options]}>
                    {/* prop varia conforme o texto de onde o componente for chamado */}
                    {props.text}
                </Animatable.Text>
        </Animatable.View>
    )
}
export default LegendTextArea;

const styles = StyleSheet.create({
    viewtxt:{
        backgroundColor: "#F5F5F5",
        padding: 8,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
        marginHorizontal: 20,
        position: 'absolute'
    },
    text_black: {
        color: "black",
        fontFamily: 'FuzzyBubbles-Bold',
    },
    text_modal_options:{
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})