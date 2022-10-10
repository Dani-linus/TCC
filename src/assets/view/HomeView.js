//Primeira tela - capa do livro e inicio da aplicação
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/HomeViewStyle';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions';
import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';

export default function HomeView() {
    const [sound, setSound] = React.useState();
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../sound/ambientSound/ambient_sound_two.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        playSound()
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../animation/cover.json')}
                autoPlay={true}
                loop={true}>
            </LottieView>

            {/* botões de opção e informação nos cantos superiores da tela inicial*/}
            <View style={styles.view_modals}>
                <ModalOptions som = {sound}/>
                console.log(sound)
                <ModalInfo />
            </View>

            {/* titulo e botão de play */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.text_white, styles.text_1]}> Os Três</Text>
                    <Text style={[styles.text_white, styles.text_2]}> porquinhos</Text>
                </View>
                <TouchableOpacity style={styles.btn_play}>
                    <Ionicons name='play' size={120} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

