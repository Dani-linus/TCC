//Componente para renderizar as legendas da história em cada página,
// basta chamar o componente e passar o texto desejado para a props text

import React from "react"
import { Text } from "react-native"
import * as Animatable from "react-native-animatable";
import styles from '../../../view/Estilo';

function LegendCaptionArea(props) {
    return (
        <Animatable.View
            animation="fadeInDown"
            duration={2000}
            style={[styles.viewtxt]}>

            <Animatable.Text
                animation="slideInLeft"
                delay={1000}
                style={[styles.txtHistoria]}>
                {props.text}
            </Animatable.Text>
        </Animatable.View>
    )
}
export default LegendCaptionArea;