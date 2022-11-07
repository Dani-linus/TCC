import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, Switch, Modal, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SoundContext } from "../contextAPI/sound";
import { SoundNarrationContext } from "../contextAPI/soundNarration";

function ModalOptions(props) {
    const navigation = useNavigation();

    // consumir o contexto criado
    const { stopSound, playSound, soundStatus } = useContext(SoundContext);
    const { stopSoundNarration,soundStatusNarration ,playSoundNarration} = useContext(SoundNarrationContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchOn] = useState(soundStatus);
    const [switchValueNarration, setSwitchOnNarration] = useState(soundStatusNarration.current);
    const [iconSound, setIconSound] = useState("volume-high");
    const [iconNarration, setIconNarration] = useState("mic");
    const [switchSoundValue, setSwitchSoundValue] = useState(soundStatus);

    useEffect(() => {
        setSwitchSoundValue(soundStatus);
        setSwitchOnNarration(soundStatusNarration.current);
        if(soundStatusNarration.current === false){
            stopSoundNarration();
        }
    })
    const toggleSwitchSound = () => {
        setSwitchSoundValue(previousState => !previousState);
        switchSoundValue ? stopSound() : playSound();
        switchSoundValue ? setIconSound("volume-mute") : setIconSound("volume-high");
    }
    const toggleSwitchNarration = () => {
        setSwitchOnNarration(previousState => !previousState);
        // assim nunca vai funcionar rsrsrs
        switchValueNarration ? soundStatusNarration.current = false : soundStatusNarration.current = true;
        switchValueNarration ? setIconNarration("mic-off") : setIconNarration("mic");
    }

    // função do botão recomeçar história 
    const goBack = () => {
        setModalVisible(false)
        navigation.navigate('PageOne')
    }
    // função do botão menu principal
    const goMenu= ()=>{
        setModalVisible(false)
        navigation.popToTop();
        stopSoundNarration();
    }

    //função para definir quando o botão de recomeçar e menu serão apresentados.
    const showComponentButton = props.showComponent ? (
        <View>
            <TouchableOpacity style={[styles.btn, styles.btn_menu]} onPress={goMenu}>
                <Text style={[styles.text_black, styles.text_modal_options]}>Menu Principal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.btn_restart]} onPress={goBack}>
                <Text style={[styles.text_black, styles.text_modal_options]}>Recomeçar história</Text>
            </TouchableOpacity>
        </View>
    ) : null;

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Modal
                onRequestClose={() => setModalVisible(false)}
                transparent
                supportedOrientations={['portrait', 'landscape']}
                visible={modalVisible}>
                <View style={styles.modal_view}>
                    <View style={[styles.btn, styles.btn_close]}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Ionicons name='close' size={32} color='black' />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_black, styles.text_modal_options]}>Definições</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.viewNarration}>
                            <Ionicons name={iconNarration} size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                            <Text style={[styles.text_black, styles.text_modal_options]}>
                                narração
                            </Text>
                            {/* adicionar componente de controle volume da narração */}
                            <Switch
                                trackColor={{ false: '#f4f3f4', true: '#56B2EB' }}
                                thumbColor={switchValueNarration ? "#56B2EB" : "#ddd"}
                                onValueChange={toggleSwitchNarration}
                                value={switchValueNarration}
                                style={{ marginLeft: 40 }}>
                            </Switch>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={iconSound} size={32} color='black' style={{ marginEnd: 10 }}></Ionicons>
                            <Text style={[styles.text_black, styles.text_modal_options]}>
                                som ambiente
                            </Text>
                            {/* adicionar componente de controle volume do som ambiente */}
                            <Switch
                                trackColor={{ false: '#f4f3f4', true: '#56B2EB' }}
                                thumbColor={switchSoundValue ? "#56B2EB" : "#ddd"}
                                onValueChange={toggleSwitchSound}
                                value={switchSoundValue}
                                style={styles.switchStyle}>
                            </Switch>
                        </View>
                    </View>
                    {showComponentButton}
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
    modal_view: {
        flex: 1,
        backgroundColor: '#F1FFFA',
        margin: 10,
        borderRadius: 20,
        padding: 20,
    },
    btn_option: {
        width: 50,
        height: 50,
        marginLeft: "3%",
    },
    btn: {
        backgroundColor: '#A8D7F5',
        borderRadius: 10,
    },
    btn_close: {
        width: 32,
        alignSelf: 'flex-end',
        elevation: 2
    },
    btn_restart: {
        marginHorizontal: 170,
        marginTop: 10,
        padding: 3,
    },
    text_black: {
        color: "black",
        fontFamily: 'PatrickHand',
    },
    text_modal_options: {
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
    switchStyle: {
        marginLeft: 10,
    },
    btn_menu: {
        marginHorizontal: 170,
        marginTop: 20,
        padding: 3,
    },

});