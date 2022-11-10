import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonNavigation(props) {
    
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