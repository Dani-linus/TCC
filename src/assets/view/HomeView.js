//Primeira tela - capa do livro e inicio da aplicação
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/HomeViewStyle';
import ModalInfo from '../components/ModalInfo';
import ModalOptions from '../components/ModalOptions';
import LottieView from 'lottie-react-native';


export default function HomeView({ navigation }) {
  
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../animation/bookHomePage.json')}
                autoPlay={true}
                loop={true}
                // style para a animação de background ficar em fullScreen
                style={{position:'absolute', width: '100%', bottom:0}}>
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

