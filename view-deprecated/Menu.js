import React from 'react';
import { Text, View, TouchableOpacity, Image, Button, Modal } from 'react-native';
import styles from './Estilo';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
<<<<<<< HEAD
import { Audio } from 'expo-av';

=======
import Ionicons from '@expo/vector-icons/Ionicons';
>>>>>>> 7e4fb9a50b5a29c80887b90a0d0e59d9bb1e86f9

import ModalInfo from '../src/assets/components/ModalInfo';
import ModalOptions from '../src/assets/components/ModalOptions';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.irLoading = this.irLoading.bind(this);
    }
    irLoading() {
        this.props.navigation.navigate('Loading')
    }

    state = {
        sound: null
      };
    

  //CARREGANDO O AUDIO
  async componentDidMount() {

    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playsThroughEarpieceAndroid: true,
    });

    this.loadAudio();

  }

  async loadAudio() {
    try {
      const sound = new Audio.Sound();
      const status = {
        shouldPlay: true
      };

      await sound.loadAsync(require('../sound/som_ambiente.mp3'), status, false);
      this.setState({
        sound
      });
    } catch (e) {
      console.log(e);
    }

  }
    render() {
       
        return (
<<<<<<< HEAD


            <View style={styles.container} >
                <View style={styles.fundocena_json}>
                    <LottieView
                        source={require('../animation/CAPA.json')}
                        autoPlay={true}
                        loop={true}
                    >
                    </LottieView>
                    <View style={styles.txtView}>
                        <Text style={styles.txtInicio1}> Os Três</Text>
                        <Text style={styles.txtInicio2}> porquinhos</Text>
                    </View>
=======
            <View style={styles.container}>
                <LottieView
                    source={require('../src/assets/animation/cover.json')}
                    autoPlay={true}
                    loop={true}>
                </LottieView>
>>>>>>> 7e4fb9a50b5a29c80887b90a0d0e59d9bb1e86f9

                {/* botões de opção e informação nos cantos superiores da tela inicial*/}
                <View style={styles.view_modals}>
                    <ModalOptions/>
                    <ModalInfo/>
                </View>

                {/* titulo e botão de play */}
                <View style={{flex:1,  alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.text_white, styles.text_1]}> Os Três</Text>
                        <Text style={[styles.text_white, styles.text_2]}> porquinhos</Text>
                    </View>
                    <TouchableOpacity style={styles.btn_play} onPress={this.irLoading}>
                        <Ionicons name='play' size={120} color='white'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
