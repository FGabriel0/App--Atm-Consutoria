import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";

export default function BarraNavegacao() {

    const navigation = useNavigation();
    const route = useRoute();

    function handlerButton() {
        navigation.navigate('/cenaprincipal')
    }

    const isCenaPrincipal = route.name === '/cenaprincipal';

    return (
        <>
            <View style={styles.container}>
        {!isCenaPrincipal && (
          <TouchableOpacity onPress={handlerButton}>
            <Image source={require('../../assets/btn_voltar.png')} />
          </TouchableOpacity>
        )}

        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CCC",
        padding: 10,
        flexDirection: "row",
        height: 60,
        top: 30
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        color: "#000"
    }
})