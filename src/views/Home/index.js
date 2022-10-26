//Primeira tela - capa do livro e inicio da aplicação
import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, Platform, BackHandler, Image, Dimensions, PixelRatio} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import ModalInfo from '@app/components/ModalInfo';
import ModalOptions from '@app/components/ModalOptions';
import LottieView from 'lottie-react-native';
import { SoundContext } from "@app/contextAPI/sound";

const homePageJSON = require('@app/../assets/animations/bookHomePage.json');

const { height, width } = Dimensions.get('window')

export default function HomeView({ navigation }) {

    const { initSound  } = useContext(SoundContext);
    initSound();
    
    // 3000  = 3 segundos
    // setTimeout(() => {
    //     initSound();
    // }, 3000);

    // adiciona um botão em SOs IOS para sair da aplicação
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
            {/* <Image source={file} style={{width: width , height: height, alignSelf:'center' }}/> */}
            <LottieView
                source={homePageJSON}
                autoPlay={true}
                loop={true}
                // style={{width: width}}
                resizeMode='cover'
               ></LottieView>

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
                
                <TouchableOpacity style={styles.btn_play} 
                    onPress={() => navigation.navigate("PageOne")}>
                    <Ionicons name='play' size={120} color='white' />
                </TouchableOpacity>
                
                {isIOSorOther()}                
            </View>
        </View>
    );
}

