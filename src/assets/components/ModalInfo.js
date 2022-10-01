import React, { useState } from "react";
import { Text, View, Button, Modal, TouchableOpacity, Image} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from "../../../view/Estilo";

function ModalInfo(){
    const [modalVisible, setModalVisible] =  useState(false);

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', margin: 10,}}>           
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                statusBarTranslucent={true}
                style={styles.modal_content}>

                <View style={styles.modal_view}>
                    <View style={{width: 32 ,backgroundColor: '#D3D3D3', borderRadius: 10, alignSelf: 'flex-end', elevation: 2}}>
                        <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                            <Ionicons name='close' size={32} color='black'/>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_black, styles.text_modal]}>definições</Text>
                    <View style={{borderWidth: 1,borderColor: 'red', flexDirection:'row' , alignItems: 'flex-start'}}>
                        <Ionicons name='mic' size={32} color='black' style={{marginEnd: 10}}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal]}>
                            narração
                        </Text>
                        {/* adicionar componente de controle volume da narração */}
                    </View>
                    <View style={{borderWidth: 1,borderColor: 'red', flexDirection:'row' , alignItems: 'center'}}>
                        <Ionicons name='musical-notes' size={32} color='black' style={{marginEnd: 10}}></Ionicons>
                        <Text style={[styles.text_black, styles.text_modal]}>
                            som ambiente
                        </Text>
                        {/* adicionar componente de controle volume da narração */}
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#56B2EB', borderRadius: 10, marginEnd: 50, marginStart:50, marginTop: 50}}>
                        <Text style={[styles.text_black, styles.text_modal]}>Recomeçar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* botão para abrir a modal de informações, localizado na tela principal */}
            <TouchableOpacity style={styles.btn_info} onPress={() => {setModalVisible(true)}}>
                <Ionicons name='information-circle-sharp' size={48} color='white'/>
            </TouchableOpacity>
        </View>
    )
}
export default ModalInfo;