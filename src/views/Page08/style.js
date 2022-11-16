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
        // height: hp(60),
        top: wp(0),
        left: wp(3),
    } ,
     toggleView: {
      position: 'absolute',
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 50,
      opacity: 0.8,
      elevation: 5,
    },
    togglebadWolf: {
      left: wp(52),
      top: wp(25),
    },
})

export default styles;