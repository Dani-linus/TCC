
import React from "react";
import { View, TouchableOpacity, Navi } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonNavigation(props) {
    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 30}}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name='arrow-back-circle' size={60} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 30}}>

                <TouchableOpacity onPress={() => props.navigation.navigate(props.proxRoute)}>
                    <Ionicons name='arrow-forward-circle' size={60} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
}