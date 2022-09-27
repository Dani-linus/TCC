import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from '../view/Estilo';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';


const buttonPlay = () => {
    const navigation = useNavigation();
}

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.irLoading = this.irLoading.bind(this);
        this.irConfig = this.irConfig.bind(this);
        this.irSobre = this.irSobre.bind(this);
    }
    irLoading() {
        this.props.navigation.navigate('Cena2')
    }
    irConfig() {
        this.props.navigation.navigate('Configuracoes')
    }

    irSobre() {
        this.props.navigation.navigate('Sobre')
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

                    <View style={styles.viewConfig}>
                        <TouchableWithoutFeedback onPress={this.irConfig}
                        >
                            <View>
                                <Image
                                    source={require('../assets/icones/menu.png')}
                                    style={styles.buttonOpcoesStyle}>
                                </Image>
                            </View>


                        </TouchableWithoutFeedback>
                    </View>


                    <TouchableWithoutFeedback onPress={this.irLoading}
                    >
                        <View>
                            <Image
                                source={require('../assets/icones/play.png')}
                                style={styles.buttonPlay}>
                            </Image>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.irSobre}>

                        <Image
                            source={require('../assets/icones/inf.png')}
                            style={styles.iconInf}>
                        </Image>

                    </TouchableWithoutFeedback>
                </View>

            </View>
        );
    }
}
