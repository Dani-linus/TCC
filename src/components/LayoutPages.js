import React from 'react';
import { StyleSheet, View } from 'react-native';
import ModalInfo from './ModalInfo';
import ModalOptions from './ModalOptions';

// Componente para criar a topBar em todas as páginas da aplicação
//<ModalInfo/>
export default function LayoutPages(props){
    return(
        <>
            <View style={styles.view_modals}>
                <ModalOptions/>
                  
            </View>

            {/* childrens */}
            {props.children}
        </>
    )
}

const styles = StyleSheet.create({
    view_modals:{
        flexDirection: "row", 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
});