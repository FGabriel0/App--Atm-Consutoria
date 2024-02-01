import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CenaPrincipal from "../screens/CenaPrincipal";
import CenaCliente from "../screens/CenaCliente";
import CenaContato from "../screens/CenaContato";
import CenaEmpresa from "../screens/CenaEmpresa";
import CenaServico from "../screens/CenaServico";

const Stack = createStackNavigator();

function AuthRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="/cenaprincipal" component={CenaPrincipal} options={{headerShown: false}}/>
            <Stack.Screen name="/cenacliente" component={CenaCliente} options={{headerShown:false}}/>
            <Stack.Screen name="/cenacontato" component={CenaContato} options={{headerShown:false}}/>
            <Stack.Screen name="/cenaempresa" component={CenaEmpresa} options={{headerShown:false}}/>
            <Stack.Screen name="/cenaservico" component={CenaServico} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}



export default AuthRouter;