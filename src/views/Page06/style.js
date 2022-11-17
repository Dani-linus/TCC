import { StyleSheet } from "react-native";

import { wp, hp } from '../CustomStyleFunction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#56B2EB",
  },
  badWolfStyle: {
    position: 'absolute',
    width: wp(90),
    height: hp(90),
    bottom: 0,
    left: 20,
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
  togglebadWolf: {
    left: wp(33),
    top: wp(35.5),
  },

})

export default styles;