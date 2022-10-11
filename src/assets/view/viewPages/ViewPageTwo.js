//Página 1 do livro
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, Touchable, Animated, Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles/StyleViewPageOne';

export default function ViewPageTwo() {
    return (
        <View style={styles.container}>
            <Image source={require('../../icons/teste_porquinho.png')} />
        </View >
    )
}