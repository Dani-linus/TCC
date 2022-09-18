import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, Touchable,Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class TesteToqueTela extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/img/cena1.png')}
          style={{ width: 1000, height: 500 }}>
            <TouchableWithoutFeedback onPress={this.irSobre} >
          <View>
            <Image
              source={require('../assets/img/teste_porquinho.png')}
                style={{left:714, marginTop:212}}>
            </Image>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
      </View>
    )
  }
}