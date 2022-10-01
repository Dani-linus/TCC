import React from 'react';
import { Text, View, TouchableOpacity, Image, Button, Modal } from 'react-native';
import styles from '../view/Estilo';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    source={require('../src/assets/animation/cover.json')}
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
                    <TouchableOpacity style={styles.btn_play} onPress={this.irLoading}>
                        <Ionicons name='play' size={120} color='white'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
