//Componente para renderizar as legendas da história em cada página,
// basta chamar o componente e passar o texto desejado para a props text

import React from "react"
import {Text} from "react-native"

function TextOfPage(props){
    return(
        <Text>{props.text}</Text>
    )
}
export default TextOfPage;