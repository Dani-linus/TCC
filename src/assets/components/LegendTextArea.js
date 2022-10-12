//Componente para renderizar as legendas da história em cada página,
// basta chamar o componente e passar o texto desejado para a props text

import React from "react"
import * as Animatable from "react-native-animatable";
// import styles from '../../../view/Estilo';
import { StyleSheet } from "react-native";

function LegendTextArea(props) {
    return (
        <Animatable.View
            animation="fadeInDown"
            duration={1000}
            style={[styles.viewtxt]}>
                <Animatable.Text
                    animation="fadeInDown"
                    duration={3000}
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
        padding: 5,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10
    },
    text_black: {
        color: "black",
        fontFamily: 'PatrickHand',
    },
    text_modal_options:{
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})