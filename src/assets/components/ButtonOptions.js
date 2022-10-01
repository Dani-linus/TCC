// componente do botão de configuração que aparece em todas as telas

import React from "react";
import { TouchableOpacity } from "react-native";

function ButtonOptions(){
    return(
        <TouchableOpacity>
            <Image
                source={require('../icons/options.png')}
                style={styles.img_btn_options}>
            </Image>
        </TouchableOpacity>
    )
}
export default ButtonOptions;