import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native-web';
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
        this.props.navigation.navigate('Loading')
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
                    <TouchableOpacity onPress={this.irSobre}
                    >
                        <View>
                            <Image
                                source={require('../assets/icones/inf.png')}
                                style={styles.iconInf}>
                            </Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.irConfig}
                    >
                        <View>
                            <Image
                                source={require('../assets/icones/menu.png')}
                                style={styles.buttonOpcoesStyle}>
                            </Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.irLoading}
                    >
                        <View>
                            <Image
                                source={require('../assets/icones/play.png')}
                                style={styles.buttonPlay}>
                            </Image>
                        </View>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}
