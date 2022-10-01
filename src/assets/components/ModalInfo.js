import React, { useState } from "react";
import { Text, View, Button, Modal, TouchableOpacity, Image} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from "../../../view/Estilo";

function ModalInfo(){
    const [modalVisible, setModalVisible] =  useState(false);

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', backfaceVisibility: 'hidden'}}>           
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                statusBarTranslucent={true}
                style={styles.modal_content}>

                <View style={styles.modal_view}>
                    <View style={{borderWidth: 1, borderColor: 'blue',width: 32 ,backgroundColor: '#BBFEE6', borderRadius: 10, alignSelf: 'flex-end', elevation: 2}}>
                        <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                            <Ionicons name='close' size={32} color='black'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, borderWidth: 1, borderColor: 'blue'}}>
                        <Text>-adicionar instruções de uso</Text>
                    </View>
                    <View style={{borderWidth: 1, borderColor: 'blue', alignSelf:'flex-end', alignContent: 'flex-end'}}>
                        <Text style={styles.text_black}>Desenvolvido por{'\n'}Danieli & Marina{'\n'}2022 - Trabalho de conclusão de curso{'\n'}Ciência da Computação - IFSC - Lages-SC</Text>
                    </View>
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