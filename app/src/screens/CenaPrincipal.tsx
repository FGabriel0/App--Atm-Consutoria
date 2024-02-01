import { StatusBar } from 'expo-status-bar';
import { View,Image,StyleSheet, TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/Item';
import { useNavigation } from '@react-navigation/native';


export default function CenaPrincipal(){
  const navigation = useNavigation();

  function handlerCliente(){
    navigation.navigate('/cenacliente')
  }
  function handlerContato(){
    navigation.navigate('/cenacontato')
  }
  function handlerServico(){
    navigation.navigate('/cenaservico')
  }
  function handlerEmpresa(){
    navigation.navigate('/cenaempresa')
  }

    return(
        <>
        <BarraNavegacao/>   
        <View style={styles.container}> 
        <StatusBar backgroundColor='#CCC'/>
  
        <View style={styles.logo}>
          <Image source={require("../../assets/logo.png")}/>
        </View>
  
        <View style={styles.menu}>
          <View style={styles.item}>

            <TouchableOpacity onPress={handlerCliente}>
              <Image  style={styles.img} source={require("../../assets/menu_cliente.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlerContato}>
              <Image   style={styles.img} source={require("../../assets/menu_contato.png")}/>
            </TouchableOpacity>
          </View>
  
          <View style={styles.item}>

          <TouchableOpacity onPress={handlerEmpresa}>
            <Image   style={styles.img} source={require("../../assets/menu_empresa.png")}/>
          </TouchableOpacity>

            <TouchableOpacity onPress={handlerServico}>
              <Image   style={styles.img} source={require("../../assets/menu_servico.png")}/>
            </TouchableOpacity>
          </View>
        </View>
             
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    container:{
      textAlign:"center",
      flex:1,
      justifyContent:"center"
    },
  logo:{
      alignItems:"center",
      marginTop:10
    },
    menu:{
      alignItems:"center"
    },
    item:{
      flexDirection:"row",
      paddingVertical:10,  
    },
    img:{
      margin:15
    }
  })