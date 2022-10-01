//Primeira tela - capa do livro e inicio da aplicação

import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from '../styles/StyleViewFrontCover';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions';

export default function ViewFrontCover(){
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../animation/cover.json')}
                autoPlay={true}
                loop={true}>
            </LottieView>

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
                <TouchableOpacity style={styles.btn_play}>
                    <Ionicons name='play' size={120} color='white'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

