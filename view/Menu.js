import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from '../view/Estilo';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

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

    render() {
        return (
            <View style={styles.container} >

                    <LottieView
                        source={require('../src/assets/animation/cover.json')}
                        autoPlay={true}
                        loop={true}>
                    </LottieView>

                    <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={this.irConfig} style={styles.btn_options}>
                                <Image
                                    source={require('../src/assets/icons/options.png')}
                                    style={styles.img_btn_options}>
                                </Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn_info} onPress={this.irSobre}>
                            <Image source={require('../src/assets/icons/info.png')} style={styles.img_btn_options}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                    <View style={styles.txtView}>
                        <Text style={styles.txtInicio1}> Os Três</Text>
                        <Text style={styles.txtInicio2}> porquinhos</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={require('../src/assets/icons/play.png')} style={styles.img_btn_play}></Image>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
