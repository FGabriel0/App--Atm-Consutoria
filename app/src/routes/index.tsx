import { NavigationContainer } from "@react-navigation/native";
import AuthRouter from "./app.router";
export default function Router(){
    return(
    <NavigationContainer>
        <AuthRouter/>
    </NavigationContainer>
    )
}