//Primeira tela - capa do livro e inicio da aplicação
import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, Platform, BackHandler } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import ModalInfo from '../../components/ModalInfo';
import ModalOptions from '../../components/ModalOptions';
import LottieView from 'lottie-react-native';
import { SoundContext } from "../../contexts/sound";

const sceneBackgroundJSON = require('../../../assets/animations/bookHomePage.json')

export default function HomeView({ navigation }) {

    const { initSound  } = useContext(SoundContext);
    
    // fazer tratamento de erro disso 
    // initSound();

    function isIOSorOther(){
        if(Platform.OS === "ios"){
            return(
                <TouchableOpacity style={styles.btn_exitIOS} onPress={() => {BackHandler.exitApp()}}>
                    <Ionicons name='exit' size={30} color='black' />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={sceneBackgroundJSON}
                autoPlay={true}
                loop={true}
                // style para a animação de background ficar em fullScreen
               style={{ flex: 1, width: undefined, height: undefined}}
               >
            </LottieView>

            {/* botões de opção e informação nos cantos superiores da tela inicial*/}
            <View style={styles.view_modals}>
                <ModalOptions/>
                <ModalInfo />
            </View>

            {/* titulo e botão de play */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.text_white, styles.text_1]}> Os Três</Text>
                    <Text style={[styles.text_white, styles.text_2]}> porquinhos</Text>
                </View>
                 <TouchableOpacity style={styles.btn_play} onPress={() => navigation.navigate("PageOne")}>
                    <Ionicons name='play' size={120} color='white' />
                </TouchableOpacity>
                {isIOSorOther()}                
            </View>
        </View>
    );
}

