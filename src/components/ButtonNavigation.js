
import React,{useEffect} from "react";
import { View, TouchableOpacity, Navi } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonNavigation(props) {
    // este componente precisa de um timer para aparecer, pode ser usado um state para monitorar 
    // se a narração terminou ou se houve interação na tela ou apenas depois de 10s

    const showComponentButtonVoltar = props.showComponent ? (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', marginLeft: 5, marginBottom: 20 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons name='arrow-back-circle' size={60} color='white' />
            </TouchableOpacity>
        </View>
    ) : null;

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
                 {showComponentButtonVoltar}
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5, marginBottom: 20 }}>

                <TouchableOpacity onPress={() => props.navigation.navigate(props.proxRoute)}>
                    <Ionicons name='arrow-forward-circle' size={60} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
}