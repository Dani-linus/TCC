import React , {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import ModalInfo from './ModalInfo';
import ModalOptions from './ModalOptions';

// Componente para criar a topBar em todas as páginas da aplicação
export default function LayoutPages(props){

    const [showComponent, setShowComponent] = useState(true);

    return(
        <>
            <View style={styles.view_modals}>
                <ModalOptions showComponent={showComponent} goBackRoute="HomeView"/>
                <ModalInfo/>
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