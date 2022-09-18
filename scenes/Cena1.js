import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, Touchable, Animated, PanResponder,TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Cena1 extends React.Component {
    constructor(props) {
        super(props);
        this.startAnimation();
    }

    pan = new Animated.ValueXY();
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            this.pan.setOffset({
                x: this.pan.x._value,
                y: this.pan.y._value
            });
        },
        onPanResponderMove: Animated.event([
            null,
            { dx: this.pan.x, dy: this.pan.y }
        ]),
        onPanResponderRelease: () => {
            this.pan.flattenOffset();
        }
    });

    state = {
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 7000,
            useNativeDriver: true,
        }).start();
    }

    render() {

        const animatedStyles = {
            opacity: this.state.animation
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[animatedStyles]}>

                    <ImageBackground
                        source={require('../assets/scenes/CENA1.jpg')}
                        style={{ width: 854, height: 500 }}>

                        <View style={[styles.viewtxt]}>
                            <Text style={styles.txtHistoria}>
                                Era uma vez três porquinhos que viviam com seus pais nos campos encantados.
                            </Text>
                            <Text style={styles.txtHistoria}>
                                Os porquinhos estavam muito felizes, e conforme cresciam, se tornaram{'\n'}
                                cada vez mais independentes.
                            </Text>
                        </View>
                        <TouchableWithoutFeedback onPress={this.irSobre} >
                            <View>
                                <Image
                                    source={require('../assets/img/teste_porquinho.png')}
                                    style={{ left: 714, marginTop: 212 }}>
                                </Image>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </Animated.View>
            </View>
        )
    }
}