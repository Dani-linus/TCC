import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from '../view/Estilo';
import { useNavigation } from '@react-navigation/native';

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
        this.props.navigation.navigate('TesteToqueTela')
    }
    irConfig() {
        this.props.navigation.navigate('Configuracoes')
    }

    irSobre() {
        this.props.navigation.navigate('Sobre')
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/img/capa.png')}
                    style={styles.capa}>
                    <TouchableWithoutFeedback onPress={this.irConfig}
                    >
                        <View>
                            <Image
                                source={require('../assets/icones/menu.png')}
                                style={styles.buttonOpcoesStyle}>
                            </Image>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.irLoading}
                    >
                        <View>
                            <Image
                                source={require('../assets/icones/play.png')}
                                style={styles.buttonPlay}>
                            </Image>
                        </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={this.irSobre}>
                        
                            <Image
                                source={require('../assets/icones/inf.png')}
                                style={styles.iconInf}>
                            </Image>
                        
                        </TouchableWithoutFeedback>
                   

                </ImageBackground>
            </View>
        );
    }
}
