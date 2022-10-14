import React, { useState } from "react";
import { Text, View, TouchableOpacity, Switch } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Modal from "react-native-modal";

import styles from "../styles/HomeViewStyle";

function ModalInfo(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchOn] = useState(true);

    const toggleSwitch = () => {
      setSwitchOn(previousState => !previousState);
      props.playPause();
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Modal isVisible={modalVisible} statusBarTranslucent={true}>
                <View style={{ flex: 1, backgroundColor: '#F1FFFA', margin: 10, borderRadius: 20, padding: 20 }}>
                    <View style={{ width: 32, backgroundColor: '#D3D3D3', borderRadius: 10, alignSelf: 'flex-end', elevation: 2 }}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Ionicons name='close' size={32} color='black' />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_black, styles.text_modal_options]}>Definições</Text>
                    <View style={{ borderWidth: 1, borderColor: 'red', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Ionicons name='mic' size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal_options]}>
                            narração
                        </Text>
                        {/* adicionar componente de controle volume da narração */}
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'red', flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='musical-notes' size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal_options]}>
                            som ambiente
                        </Text>
                        {/* adicionar componente de controle volume do som ambiente */}
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={switchValue}>
                        </Switch>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#56B2EB', borderRadius: 10, marginEnd: 50, marginStart: 50, marginTop: 50 }}>
                        <Text style={[styles.text_black, styles.text_modal_options]}>Recomeçar</Text>
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
export default ModalInfo;