import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { render } from 'react-dom';

export default class TesteSom extends React.Component {
  
   async componentDidMount(){
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground:true,
        playsThroughEarpieceAndroid:true
    });
   

    this.sound =  new Audio.Sound();

    const status = {
        shouldPlay : false
    };

    this.sound.loadAsync(require('../sound/som_ambiente.mp3'), status, false);
}

playSound(){
    this.sound.playAsync();
}


    render() {
        return (
            <View>
                <View>
                    <Button title="Play Sound" onPress={this.playSound.bind(this)} />
                </View>
            </View>
        );
    }

}