import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#56B2EB",
    },
    view_wolf:{
        position: 'absolute',
        width: wp(33),
        top: wp(6),
        left: wp(11),
    },
    view_pigs:{
        position: 'absolute',
        width: wp(80),
        top: wp(1),
        left: wp(15)
    },
     toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 2,
    },
    togglebadWolf: {
      left: wp(45),
      top: wp(24),
    },
})

export default styles;