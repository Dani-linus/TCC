//Componente para renderizar as legendas da história em cada página,
// basta chamar o componente e passar o texto desejado para a props text

import React from "react"
import { Text } from "react-native"
import * as Animatable from "react-native-animatable";
import styles from '../../../view/Estilo';

function LegendTextArea(props) {
    return (
        <Animatable.View
            animation="fadeInDown"
            duration={1000}
            style={[styles.viewtxt]}>
            <Text>{props.text}</Text>
        </Animatable.View>
    )
}
export default LegendTextArea;