import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
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
                <View style={styles.fundocena_json}>

                    <LottieView
                        source={require('../src/assets/animation/cover.json')}
                        autoPlay={true}
                        loop={true}>
                    </LottieView>

                    <View style={styles.txtView}>
                        <Text style={styles.txtInicio1}> Os Três</Text>
                        <Text style={styles.txtInicio2}> porquinhos</Text>
                    </View>

                    <View style={styles.viewConfig}>
                        <TouchableWithoutFeedback onPress={this.irConfig}>
                            <View>
                                <Image
                                    source={require('../src/assets/icons/options.png')}
                                    style={styles.buttonOpcoesStyle}>
                                </Image>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <TouchableWithoutFeedback onPress={this.irLoading}>
                        <View>
                            <Image
                                source={require('../src/assets/icons/play.png')}
                                style={styles.buttonPlay}>
                            </Image>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.irSobre}>
                        <Image
                            source={require('../src/assets/icons/info.png')}
                            style={styles.iconInf}>
                        </Image>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}
