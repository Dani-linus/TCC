import { StyleSheet } from "react-native";


//height - altura
//width - largura
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    splash: {
        flex: 2, justifyContent: 'center'
    },
    btn_info:{
        width: 50,
        height: 50,
        marginRight: 25,
    },
    btn_option:{
        width: 50,
        height: 50,
        marginLeft: 25,
    },
    btn_play:{
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
    capa: {
        height: 500,
        width: 920,
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
        height: 50,
        width: 40,
        top:300,
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
        height: 10,
        left:60,
    },
    buttonSair:{
        margin: 10,
        height: 30,
        width: 30,
        left: 740 ,
        //color: '#D3D3D3'
    },
    txtVoltar:{
        fontFamily: 'PatrickHand',
        fontSize: 30,
        color: '#FFFFFF',
    },
    viewVoltar: {
       backgroundColor: "#56B2EB",
        height: 45,
        top: 15,
        left: 300,
        width: 300,
        margin: 20,
        marginLeft: 10,
        borderRadius: 10,
       
    },
    txtTituloSobre:{
        fontFamily: 'PatrickHand',
        fontSize: 30,
        left: 300,
        marginTop:10,

    },
    txtSubsobre:{
        fontSize: 20,
        left: 270
    },
    txtDesenvolvidopor:{
        fontSize: 10,
        left: 560,
        top :165
    },
    imgPorquinhos:{
        height: 100,
        width: 300,
        left:270,
        top:50
    },
    viewtxt:{
        backgroundColor: "#F5F5F5",
        height: 100,
        margintop: 5,
        left: 300,
        width: 400,
        margin: 20,
        marginLeft: 10,
        borderRadius: 10,
    },
    txtHistoria:{
        fontFamily: 'PatrickHand',
        fontSize: 14,
        left:10,
        marginTop:20
    },
    imgCena1:{
        height: 300,
        width: 700,
    },
    animationPig:{
        height: 300,
        width: 500,
    },
    fundocenaMenu_json:{
        width: 890, 
        height: 500, 
        right:10
    },
    text_white: {
        color: "white",
        fontFamily: 'PatrickHand',
    },
    text_black: {
        color: "black",
        fontFamily: 'PatrickHand',
    },
    text_1:{
        fontSize: 40,
        lineHeight: 50,
    },
    text_2:{
        fontSize: 70,
        lineHeight: 75,
    },
    viewConfig:{
    right:425,
    bottom:120
    },
    modal_view:{
        flex: 1,
        backgroundColor: '#F1FFFA',
        margin: 10,
        borderRadius: 20,
        padding: 20,
    },
    modal_content:{
        backgroundColor: 'red'
    },
    text_modal_options:{
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    view_modals:{
        flexDirection: "row", 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
});

export default styles;

