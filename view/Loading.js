import React, { useState } from 'react';
import {
    Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground,
    ProgressBarAndroid} from 'react-native';
    import styles from '../view/Estilo';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <View style={styles.container}>
               <ImageBackground
                    source={require('../assets/img/loading.png')}
                    style={styles.capa}>
                        <View tyle={styles.splash}>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        color="#D9D9D9"
                        progress={0.2}
                        />
                        </View>
                </ImageBackground>
                
            </View>


        );
    }
}