import React from 'react';
import { Text, View, TouchableOpacity, Image, Button, Modal } from 'react-native';
import styles from '../view/Estilo';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ModalInfo from '../src/assets/components/ModalInfo';

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
        this.props.navigation.navigate('Loading')
    }
    irConfig() {
        this.props.navigation.navigate('Configuracoes')
    }

    irSobre() {
        // this.props.navigation.navigate('')
    }

    render() {
        return (
            <View style={styles.container}>
                    <LottieView
                        source={require('../src/assets/animation/cover.json')}
                        autoPlay={true}
                        loop={true}>
                    </LottieView>

                    {/* botões de opção e informação nos cantos superiores */}
                    <View style={{flexDirection: "row", justifyContent: 'space-between', borderWidth: 1,borderColor: 'red', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.irConfig} style={styles.btn_options}>
                            <Ionicons name='options' size={48} color='white'/>
                        </TouchableOpacity>
                        <ModalInfo/>

                    </View>

                    {/* titulo e botão de play */}
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', borderWidth: 1,borderColor: 'orange'}}>

                    <View style={{alignItems: 'center', borderWidth: 1,borderColor: 'purple'}}>
                        <Text style={[styles.text_white, styles.text_1]}> Os Três</Text>
                        <Text style={[styles.text_white, styles.text_2]}> porquinhos</Text>
                    </View>
                    <TouchableOpacity style={styles.btn_play} onPress={this.irLoading}>
                        {/* <Image source={require('../src/assets/icons/play.png')} style={styles.img_btn_play}></Image> */}
                        <Ionicons name='play' size={150} color='white'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
