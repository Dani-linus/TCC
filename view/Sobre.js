import React from 'react';
import { Text, View ,ImageBackground,TouchableWithoutFeedback,Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import styles from './Estilo';
import * as Font from 'expo-font';
import LegendCaptionArea from '../src/assets/components/LegendCaptionArea';
import ModalInfo from '../src/assets/components/ModalInfo';

export default class Sobre extends React.Component {
    constructor(props) {
        super(props);
        this.btnVoltar = this.btnVoltar.bind(this);
    }

    btnVoltar() {
        this.props.navigation.navigate('Menu')
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <LegendCaptionArea text="Aqui vai o texto que a gente quiser colocar"></LegendCaptionArea> */}
                {/* <ImageBackground
                    source={require('../assets/img/fundo.png')}
                    style={styles.capa}>
                    <View style={styles.retangulo}>
                    <TouchableWithoutFeedback onPress={this.btnVoltar} >
                            <View>
                                <Image
                                    source={require('../src/assets/icons/x.png')}
                                    style={styles.buttonSair}>
                            </Image>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={styles.txtTituloSobre}> Os Três Porquinhos</Text>
                        <Text style={styles.txtSubsobre}> APLICATIVO DE LEITURA INFANTIL</Text>
                         <Image 
                         source={require('../assets/img/porquinhos.png')}
                         style={styles.imgPorquinhos}>
                         </Image>
                         <Text style={styles.txtDesenvolvidopor}>Desenvolvido por Daniele e Marina Savitzki (2022)</Text>
                    </View>
                </ImageBackground> */}

            </View>
        );
    }
}
