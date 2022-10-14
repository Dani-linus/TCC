//Primeira tela - capa do livro e inicio da aplicação
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/HomeViewStyle';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';


export default function HomeView({ navigation }) {

    const [sound, setSound] = useState(null);
    const [soundStatus, setSoundStatus] = useState({
        status: null,
        isPlaying: false,
    });

    function setSoundOption(){
        setSound(false)
    }

    async function handleAudio() {
        // playing audio for the first time
        try {
            if (soundStatus.status === null) {
                const { sound, status } = await Audio.Sound.createAsync
                  (require('./../sound/ambientSound/ambient_sound_two.mp3'),
                  { shouldPlay: true }
                );
                setSound(sound);
                setSoundStatus({ status: status, isPlaying: true, icon: 'pausecircle' });
              }
          
              // pause audio
              if (soundStatus.status?.isLoaded && soundStatus.isPlaying) {
                const status = await sound.pauseAsync();
                setSoundStatus({ status: status, isPlaying: false});
              }
          
              // resuming audio
              if (soundStatus.status?.isLoaded && !soundStatus.isPlaying) {
                const status = await sound.playAsync();
                setSoundStatus({ status: status, isPlaying: true});
              }
            
        } catch (error) {
            Alert("erro")
        }
        
      }

    React.useEffect(() => {
        // if( === false){
        //     // handleAudio();
        // }
    });

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../animation/bookHomePage.json')}
                autoPlay={true}
                loop={true}
                // style para a animação de background ficar em fullScreen
                style={{ position: 'absolute', width: '100%', bottom: 0 }}>
            </LottieView>

            {/* botões de opção e informação nos cantos superiores da tela inicial*/}
            <View style={styles.view_modals}>
                <ModalOptions playPause={handleAudio} statusOnOffSound={setSoundOption}/>
                <ModalInfo />
            </View>

            {/* titulo e botão de play */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.text_white, styles.text_1]}> Os Três</Text>
                    <Text style={[styles.text_white, styles.text_2]}> porquinhos</Text>
                </View>
                 <TouchableOpacity style={styles.btn_play} onPress={() => navigation.navigate("PageOne")}>
            <Ionicons name='play' size={120} color='white' />
                </TouchableOpacity>

            </View>
        </View>
    );
}

