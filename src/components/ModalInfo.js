import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, StyleSheet} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


function ModalInfo(){
    const [modalVisible, setModalVisible] =  useState(false);

    return(
        <View style={styles.center}>           
            <Modal 
                onRequestClose={() => setModalVisible(false)}
                transparent
                visible={modalVisible}>

                <View style={styles.modal_view}>
                    <View style={styles.btn_close}>
                        <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                            <Ionicons name='close' size={32} color='black'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>-adicionar instruções de uso</Text>
                    </View>
                    <View style={{alignSelf:'flex-end', alignContent: 'flex-end'}}>
                        <Text style={styles.text_black}>Desenvolvido por{'\n'}Daniele & Marina{'\n'}2022 - Trabalho de conclusão de curso{'\n'}Ciência da Computação - IFSC - Lages-SC</Text>
                    </View>
                </View>
            </Modal>

            {/* botão para abrir a modal de informações, localizado na tela principal */}
            <TouchableOpacity style={styles.btn_info} onPress={() => { setModalVisible(true) }}>
                <Ionicons name='information-circle' size={50} color='white'/>
            </TouchableOpacity>
        </View>
    )
}
export default ModalInfo;

const styles = StyleSheet.create({

    btn_info:{
        width: 50,
        height: 50,
        marginRight: 25,
    },
    text_black: {
        color: "black",
        fontFamily: 'PatrickHand',
    },
    modal_view:{
        flex: 1,
        backgroundColor: '#F1FFFA',
        margin: 10,
        borderRadius: 20,
        padding: 20,
    },
    btn_close: {
        width: 32,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        alignSelf: 'flex-end',
        elevation: 2
    }

});