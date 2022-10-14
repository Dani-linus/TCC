import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Switch, Modal, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { SoundContext } from "../contexts/sound";

function ModalOptions(props) {

    // consumir o contexto criado
    // const {} = useContext()



    const [modalVisible, setModalVisible] = useState(false);
    // const [switchValue, setSwitchOn] = useState(true);

    // const toggleSwitch = () => {
    //   setSwitchOn(previousState => !previousState);
    // //   props.playPause();
    // //   props.statusOnOffSound(false);
    // }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Modal
                onRequestClose={() => setModalVisible(false)}
                transparent
                visible={modalVisible}>
                <View style={styles.modal_view}>
                    <View style={[styles.btn,styles.btn_close]}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Ionicons name='close' size={32} color='black' />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_black, styles.text_modal_options]}>Definições</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: '5%'}}>
                        <Ionicons name='mic' size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal_options]}>
                            narração
                        </Text>
                        {/* adicionar componente de controle volume da narração */}
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='musical-notes' size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal_options]}>
                            som ambiente
                        </Text>
                        {/* adicionar componente de controle volume do som ambiente */}
                        {/* <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumColor={switchValue ? "#aaa" : "#f4f3f4"}
                            onValueChange={null}
                            value={null}>
                        </Switch> */}
                    </View>
                    <TouchableOpacity style={[styles.btn,styles.btn_restart]}>
                        <Text style={[styles.text_black, styles.text_modal_options]}>Recomeçar história</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* botão para abrir a modal de informações, localizado na tela principal */}
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
        marginLeft: 25,
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
        marginHorizontal: 80,
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


});