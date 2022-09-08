import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    splash: {
        flex: 2, justifyContent: 'center'
    },
    buttonOpcoesStyle: {
        margin: 10,
        height: 30,
        width: 40,
        alignItems: 'flex-start',
    },
    capa: {
        height: 500,
        width: 900,
        resizeMode: 'center',
    },

    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 200,
        width: 200,
        resizeMode: 'center',
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    imageForeground: {
        width: 500,
        height: 500,
    },
    containerConfig: {
        flex: 1,
        flexDirection: "column"
    },
    switch: {
        width: 600,
        height: 600
    },
    retangulo: {
        backgroundColor: "#F1FFFA",
        height: 410,
        top: 15,
        left: 20,
        width: 790,
        margin: 20,
        marginLeft: 10,
        borderRadius: 10,
    },
    buttonPlay: {
        height: 550,
        width: 850,
        resizeMode: 'center'
    },
    configTextDefi: {
        fontFamily: 'PatrickHand',
        fontSize: 40,
        color: '#171219',
        top:20,
        left:350

    },
    configText: {
        fontFamily: 'PatrickHand',
        fontSize: 35,
        color: '#171219',
        left:120,
        top:30
    },

    configTextSom: {
        fontFamily: 'PatrickHand',
        fontSize: 35,
        color: '#171219',
        left:121,
        top:45
    },
    imgNarracao:{
     width:30,
     height:30,
     left:90,
     top:70
    },

    imgSom:{
        width:30,
        height:30,
        left:88,
        top:10
       },

    slider:{
        width: 300, 
        height: 30,
        left:330,
         
    },
    slider_som:{
        width: 300, 
        height: 0,
        left:330,
    },
    buttonSair:{
        margin: 10,
        height: 30,
        width: 30,
        left: 740 ,
        color: '#D3D3D3'
    },
    buttonVoltar:{
        title:"VOLTAR AO MENU INICIAL",
        fontFamily: 'PatrickHand',
        fontSize: 35,
        color: '#171219',
        width:100
    }
});

export default styles;

