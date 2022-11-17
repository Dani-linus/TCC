import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#56B2EB",
    },
    view_wolf:{
        position: 'absolute',
        width: wp(120),
        top: wp(-3),
        left: wp(-12),
    },
    toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 40,
      height: 40,
      borderRadius: 40,
      opacity: 0.8,
      elevation: 2,
    },
    togglewolf: {
      left: wp(19),
      top: wp(26),
    },
})

export default styles;