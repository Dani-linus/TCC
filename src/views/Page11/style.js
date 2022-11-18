import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#56B2EB",
    },
    view_pigs:{
        position: 'absolute',
        width: wp(80),
        top: wp(3),
        left: wp(16),
    },
    view_wolf:{
        position: 'absolute',
        width: wp(28),
        top: wp(7),
        left: wp(8),
    },
    toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 40,
      height: 40,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 2,
    },
    togglewolf: {
      left: wp(34),
      top: wp(24),
    },
})

export default styles;