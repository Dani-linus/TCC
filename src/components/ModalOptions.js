import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, Switch, Modal, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SoundContext } from "../contextAPI/sound";
import { SoundNarrationContext } from "../contextAPI/soundNarration";
import { StatusBar } from 'expo-status-bar';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function ModalOptions(props) {
    
    SystemNavigationBar.fullScreen(true);
    const navigation = useNavigation();
    
    const { stopSound, playSound, isPlaying } = useContext(SoundContext);
    const { stopSoundNarration, soundStatusNarration } = useContext(SoundNarrationContext);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [switchValueNarration, setSwitchOnNarration] = useState(soundStatusNarration.current);
    const [iconSound, setIconSound] = useState("volume-high");
    const [iconNarration, setIconNarration] = useState("mic");
    const [switchSoundValue, setSwitchSoundValue] = useState(true);
    
    useEffect(() => {
        setSwitchOnNarration(soundStatusNarration.current);
        if(soundStatusNarration.current === false){
            stopSoundNarration();
        }
        if(soundStatusNarration.current === true){
            setIconNarration("mic")
        }else{
            setIconNarration("mic-off")
        }
        modalVisible ? SystemNavigationBar.fullScreen(true) : SystemNavigationBar.fullScreen(false);
    });

    useEffect(() =>{
        setSwitchSoundValue(isPlaying)
        if(isPlaying === true){
            setIconSound("volume-high")
        }else{
            setIconSound("volume-mute")
        }
    }, [isPlaying]);

    const toggleSwitchSound = () => {
        setSwitchSoundValue(previousState => !previousState);
        switchSoundValue ? stopSound() : playSound();
        switchSoundValue ? setIconSound("volume-mute") : setIconSound("volume-high");
    }
    const toggleSwitchNarration = () => {
        setSwitchOnNarration(previousState => !previousState);
        switchValueNarration ? soundStatusNarration.current = false : soundStatusNarration.current = true;
        switchValueNarration ? setIconNarration("mic-off") : setIconNarration("mic");
    }

    // função do botão recomeçar história 
    const goBack = () => {
        setModalVisible(false)
        navigation.popToTop();
        stopSoundNarration();
    }

    //função para definir quando o botão de recomeçar 
    const showComponentButton = props.showComponent ? (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={[styles.btn, styles.btn_restart]} onPress={goBack}>
                <Text style={[styles.text_black, styles.text_modal_options]}>Recomeçar história</Text>
            </TouchableOpacity>
        </View>
    ) : null;

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar hidden={true}/>
            <Modal
                onRequestClose={() => setModalVisible(false)}
                animationType={'fade'}
                statusBarTranslucent={true}
                presentationStyle={'fullScreen'}
                supportedOrientations={['landscape']}
                visible={modalVisible}>
                <View style={styles.modal_view}>
                    <View style={[styles.btn, styles.btn_close]}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Ionicons name='close' size={32} color='black' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                        <Ionicons name="settings-outline" size={24} color="black" style={{marginEnd: 15}}/>
                        <Text style={[styles.text_black, styles.text_modal_options]}>Definições e ajustes</Text>
                    </View>
                    <View style={styles.viewOptions}>
                        <View style={styles.viewNarration}>
                            <Ionicons name={iconNarration} size={32} color='black' style={{ marginEnd: 15 }}></Ionicons>
                            <Text style={[styles.text_black, styles.text_modal_options]}>
                                narração
                            </Text>
                            <Switch
                                trackColor={{ false: '#f4f3f4', true: '#56B2EB' }}
                                thumbColor={switchValueNarration ? "#56B2EB" : "#ddd"}
                                onValueChange={toggleSwitchNarration}
                                value={switchValueNarration}
                                style={{ marginLeft: 40 }}>
                            </Switch>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={iconSound} size={32} color='black' style={{ marginEnd: 15 }}></Ionicons>
                            <Text style={[styles.text_black, styles.text_modal_options]}>
                                som ambiente
                            </Text>
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
        alignItems: 'center',
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
        marginHorizontal: 150,
        marginTop: 20,
        padding: 5,
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
    },
    switchStyle: {
        marginLeft: 10,
    },
    btn_menu: {
        marginHorizontal: 170,
        marginTop: 20,
        padding: 3,
    },
    viewOptions: { 
        width: '100%', 
        height: '50%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#E1F5EE', 
        borderRadius: 20,
    },
});