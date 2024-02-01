import { View,Text,StatusBar,Image } from "react-native";
import { StyleSheet } from "react-native";
import BarraNavegacao from "../components/Item";
export default function CenaEmpresa(){
    return(
        <>
        <BarraNavegacao/>
        <View style={style.container}>
           <StatusBar backgroundColor='#CCC'/>
            <View style={style.cabecalho}>
                <Image source={require("../../assets/detalhe_empresa.png")}/>
                <Text style={style.estilo}>Nossas Empresas</Text>
            </View>

            <View style={style.conteudo1}>
                <Image source={require("../../assets/cliente1.png")}/>
                <Text>Lorem ipsum dolor</Text>

            </View>

            <View style={style.conteudo2}>
                <Image source={require("../../assets/cliente2.png")}/>
                <Text>Lorem ipsum dolor</Text>

            </View>

      </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        justifyContent:"center",
        
        top:100
    },

    cabecalho:{
        flexDirection:"row",
        marginTop:20,
        marginLeft:30
    },
    estilo:{
        fontSize:30,
        color:"#ec7148",
        marginLeft:20,
    },
    conteudo1:{
        marginTop:30,
        padding:20,
        marginLeft:15
    },
    conteudo2:{
        marginTop:30,
        padding:20,
        marginLeft:15
    }
})