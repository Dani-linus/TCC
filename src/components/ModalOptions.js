import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Switch, Modal, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { SoundContext } from "../contextAPI/sound";

function ModalOptions() {
    const navigation = useNavigation();

    // consumir o contexto criado
    const { playSound, stopSound } = useContext(SoundContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchOn] = useState(true);
    const [switchValueNarration, setSwitchOnNarration] = useState(true);
    const [icon, setIcon] = useState("volume-high");
  
    const toggleSwitch = () => {
      setSwitchOn(previousState => !previousState);
      switchValue ? stopSound() : playSound();
      if(switchValue === true){
        setIcon("volume-mute");
      }else{
        setIcon("volume-high")
      }
    }
    const toggleSwitchNarration = () => {
        setSwitchOnNarration(previousState => !previousState);
    }   

    // função do botão recomeçar história
    const goBack = () => {
        setModalVisible(false)
        navigation.popToTop()
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Modal
                onRequestClose={() => setModalVisible(false)}
                transparent
                supportedOrientations={['portrait', 'landscape']}
                visible={modalVisible}>
                <View style={styles.modal_view}>
                    <View style={[styles.btn,styles.btn_close]}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Ionicons name='close' size={32} color='black' />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_black, styles.text_modal_options]}>Definições</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.viewNarration}>
                        <Ionicons name='mic' size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal_options]}>
                            narração
                        </Text>
                        {/* adicionar componente de controle volume da narração */}
                        <Switch
                            trackColor={{ false: '#f4f3f4', true: '#56B2EB' }}
                            thumbColor={switchValueNarration? "#56B2EB" : "#ddd"}
                            onValueChange={toggleSwitchNarration}
                            value={switchValueNarration}
                            style={{marginLeft: 40}}>
                        </Switch>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name={icon} size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal_options]}>
                            som ambiente
                        </Text>
                        {/* adicionar componente de controle volume do som ambiente */}
                        <Switch
                            trackColor={{ false: '#f4f3f4', true: '#56B2EB' }}
                            thumbColor={switchValue? "#56B2EB" : "#ddd"}
                            onValueChange={toggleSwitch}
                            value={switchValue}
                            style={styles.switchStyle}>
                        </Switch>
                    </View>
                    </View>
                    <TouchableOpacity style={[styles.btn,styles.btn_restart]} onPress={goBack}>
                        <Text style={[styles.text_black, styles.text_modal_options]}>Recomeçar história</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* botão para abrir a modal de definições */}
            <TouchableOpacity style={styles.btn_option} onPress={() => { setModalVisible(true) }}>
                <Ionicons name='menu' size={50} color='white' />
            </TouchableOpacity>
        </View>
    )
}
export default ModalOptions;

const styles = StyleSheet.create({
    modal_view:{
        flex: 1,
        backgroundColor: '#F1FFFA',
        margin: 10,
        borderRadius: 20,
        padding: 20,
    },
    btn_option:{
        width: 50,
        height: 50,
        marginLeft: "3%",
    },
    btn:{
        backgroundColor: '#A8D7F5',
        borderRadius: 10,
    },
    btn_close: {
        width: 32,
        alignSelf: 'flex-end',
        elevation: 2
    },
    btn_restart:{
        marginHorizontal: 120,
        marginTop: 50,
        padding: 10,
    },
    text_black: {
        color: "black",
        fontFamily: 'PatrickHand',
    },
    text_modal_options:{
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center',
        
    },
    viewNarration: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        alignItems: 'center',
        marginTop: '5%'
    },
    switchStyle:{
        marginLeft: 10,
    }


});