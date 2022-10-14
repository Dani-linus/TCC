//Primeira tela - capa do livro e inicio da aplicação
import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import ModalInfo from '../../components/ModalInfo';
import ModalOptions from '../../components/ModalOptions';
import LottieView from 'lottie-react-native';

import { SoundContext } from "../../contexts/sound";

export default function HomeView({ navigation }) {

    const { initSound  } = useContext(SoundContext);

    initSound();

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../../assets/animations/bookHomePage.json')}
                autoPlay={true}
                loop={true}
                // style para a animação de background ficar em fullScreen
                style={{ position: 'absolute', width: '100%', bottom: 0 }}>
            </LottieView>

            {/* botões de opção e informação nos cantos superiores da tela inicial*/}
            <View style={styles.view_modals}>
                <ModalOptions/>
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

