import { StyleSheet } from "react-native";


//height - altura
//width - largura
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    splash: {
        flex: 2, justifyContent: 'center'
    },
    btn_options:{
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 25,

    },
    btn_info:{
        width: 50,
        height: 50,
        marginTop: 10,
        marginRight: 25,

    },
    img_btn_options:{
        resizeMode: "contain",
        width: '100%',
        height: '100%',
    },
    img_btn_play:{
        resizeMode: "contain",
        width: 100,
        height: 100,
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

    iconInf:{
        height: 30,
        width: 30,
        margin : 5,
        position: 'absolute',
        left : 815
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
    txtInicio1:{
        fontFamily: 'PatrickHand',
        fontSize: 40,
        color : '#F5F5F5',
        lineHeight: 50
    },

    txtInicio2:{
        fontFamily: 'PatrickHand',
        fontSize: 70,
        color : '#F5F5F5',
        lineHeight: 75
    },

    txtView:{
        alignItems :'center',
        top:30
    },
    viewConfig:{
    right:425,
    bottom:120
    }
});

export default styles;

