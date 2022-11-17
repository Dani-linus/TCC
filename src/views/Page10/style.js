import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#56B2EB",
    },
    view_wolfBlowing:{
        position: 'absolute',
        width: wp(100),
        top: wp(0),
        left: wp(-1),
    },
    toggleView: {
      backgroundColor: 'white',
      position: 'absolute',
      width: 40,
      height: 40,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 2,
    },
    togglewolfBlowing: {
      left: wp(40),
      top: wp(24),
    },
})

export default styles;